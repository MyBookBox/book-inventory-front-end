"use client";

import React from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";
import PrimaryButton from "../../src/components/primary-button";
import {ArrowRight} from "lucide-react";
import TextInput from "../../src/components/text-input";
import {Button} from "../../src/components/ui/button";

const loginSchema = z.object({
    email: z.string().email("Please enter a valid email."),
    password: z.string().min(6, "Password must be at least 6 characters."),
});

type LoginForm = z.infer<typeof loginSchema>;

const Login = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginForm) => {
        console.log("Form Data:", data);
        localStorage.setItem("authToken", "abcd");
        router.push("/home");
    };

    return (
        <div className="flex">
            <div className="flex items-center justify-center min-h-screen bg-gray-100 w-1/2">
                <div className="flex-col w-1/3">
                    <div className="text-4xl font-bold text-purple-600">
                        Welcome Back!
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                    >
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
                            loading={false}
                            icon={<ArrowRight/>}
                            additionalStyles="mb-8 mt-4"
                            type="submit"
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
            <div className="w-1/2">
                <img
                    src={"/images/login.jpeg"}
                    style={{
                        width: "100%",
                        height: "100vh",
                        objectFit: "cover",
                    }}
                    alt="Login"
                />
            </div>
        </div>
    );
};

export default Login;
