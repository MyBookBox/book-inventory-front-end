"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import PrimaryButton from "../../src/components/primary-button";
import { ArrowRight } from "lucide-react";
import TextInput from "../../src/components/text-input";
import { Button } from "../../src/components/ui/button";
import { post } from "../../src/service/request";
import { storeToken, storeUser } from "../../src/shared/utils/stroge-util";
import { toast } from "react-toastify";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(20, "Password must be less than 8 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      setIsLoading(true);
      const response = await post("user/signin", data);
      storeToken(response["accessToken"]);
      storeUser(response["user"]);
      toast.success("Successfully Login");
      router.push("/home");
    } catch (e: any) {
      toast.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/home");
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src={"/images/login.jpeg"}
          className="w-full h-auto lg:h-screen object-cover"
          alt="Login"
        />
      </div>

      {/* Form Section */}
      <div className="flex items-center justify-center bg-gray-100 h-screen w-full lg:w-1/2 p-4 lg:p-8">
        <div className="flex-col w-full lg:w-1/2">
          <div className="text-3xl lg:text-4xl font-bold text-purple-600">
            Welcome Back!
          </div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextInput
              label="Email"
              placeholder="Enter your email"
              wrapperStyles="my-8"
              additionalStyles={errors.email && "border-red-500"}
              {...register("email")}
              error={errors.email?.message}
            />
            <TextInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              wrapperStyles="mb-4"
              additionalStyles={errors.password && "border-red-500"}
              {...register("password")}
              error={errors.password?.message}
            />
            <div className="flex justify-end">
              <Button
                variant="link"
                className="text-gray-600 underline font-normal mx-0 px-0"
                onClick={() => router.push("/signup")}
              >
                Forgot Password
              </Button>
            </div>
            <PrimaryButton
              label="Login"
              loading={isLoading}
              icon={<ArrowRight />}
              additionalStyles="mb-8 mt-4"
            />
          </form>
          <div className="text-sm text-center">
            Don't have an account yet?
            <Button
              variant="link"
              className="text-purple-600"
              onClick={() => router.push("/signup")}
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
