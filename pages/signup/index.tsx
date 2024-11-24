"use client";
import React from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import TextInput from "../../src/components/text-input";
import PrimaryButton from "../../src/components/primary-button";
import {ArrowRight} from "lucide-react";
import {Button} from "../../src/components/ui/button";
import {useRouter} from "next/navigation";
import {z} from "zod";

const signupSchema = z.object({
    firstName: z.string().min(4, "First Name must be at least 4 characters").nonempty("First Name is required"),
    lastName: z.string().min(4, "Last Name must be at least 4 characters").nonempty("Last Name is required"),
    email: z.string().email("Invalid email address").nonempty("Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters").nonempty("Password is required"),
});

type SignupFormValues = z.infer<typeof signupSchema>;
const Signup = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<SignupFormValues>({
        resolver: zodResolver(signupSchema),
    });

    const onSubmit = (data: SignupFormValues) => {
        console.log("Form submitted with values:", data);
    };

    return (
        <div className="flex">
            <div className="w-1/2">
                <img
                    src={"/images/signup.jpg"}
                    style={{
                        width: "100%",
                        height: "100vh",
                        objectFit: "cover",
                    }}
                    alt="Signup"
                />
            </div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 w-1/2">
                <div className="flex-col w-1/2">
                    <div className="text-4xl font-bold text-purple-600">Welcome to MyBookBox!</div>
                    <div className="text-gray-600 text-md mt-4">Enter your details below to create an account:</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextInput
                            label="First Name"
                            placeholder="Enter your first name"
                            wrapperStyles="my-8"
                            error={errors.firstName?.message}
                            {...register("firstName")}
                        />
                        <TextInput
                            label="Last Name"
                            placeholder="Enter your last name"
                            wrapperStyles="my-8"
                            error={errors.lastName?.message}
                            {...register("lastName")}
                        />
                        <TextInput
                            label="Email"
                            placeholder="Enter your email"
                            wrapperStyles="my-8"
                            error={errors.email?.message}
                            {...register("email")}
                        />
                        <TextInput
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            wrapperStyles="my-8"
                            error={errors.password?.message}
                            {...register("password")}
                        />
                        <PrimaryButton
                            label="Create an Account"
                            loading={false}
                            icon={<ArrowRight/>}
                            additionalStyles="my-8"
                        />
                    </form>
                    <div className="text-sm text-center">
                        Already have an account?
                        <Button
                            variant="link"
                            className="text-purple-600"
                            onClick={() => router.push("/login")}
                        >
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
