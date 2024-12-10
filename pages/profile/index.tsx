import React, {useState} from "react";
import {Avatar, AvatarFallback} from "../../src/components/ui/avatar";
import TextInput from "../../src/components/text-input";
import PrimaryButton from "../../src/components/primary-button";
import {ArrowRight} from "lucide-react";
import {
    getUser,
    removeStorage
} from "../../src/shared/utils/stroge-util";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {post} from "../../src/service/request";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";

const resetPasswordSchema = z.object({
    newPassword: z
        .string()
        .min(8, "Password must be at least 8 characters.")
        .max(20, "Password must be less than 20 characters."),
    confirmPassword: z
        .string()
        .min(8, "Password must be at least 8 characters.")
        .max(20, "Password must be less than 20 characters."),
    currentPassword: z
        .string()
        .min(8, "Password must be at least 8 characters.")
        .max(20, "Password must be less than 20 characters."),
}).refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
});

type ResetPasswordForm = z.infer<typeof resetPasswordSchema>;

const Profile = () => {
    const router = useRouter();
    const user = getUser() ?? {name: "User", email: "example@domain.com"};
    const getInitials = (name: string) =>
        name
            ?.split(" ")
            .map((word) => word.charAt(0).toUpperCase())
            .join("");

    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<ResetPasswordForm>({
        resolver: zodResolver(resetPasswordSchema),
    });

    const onSubmit = async (data: ResetPasswordForm) => {
        if (data.confirmPassword != data.newPassword) {
            toast.error("The new password and confirm password do not match. Please ensure both fields contain the same password");
        } else if (data.confirmPassword == data.currentPassword) {
            toast.error("The new password cannot be the same as the current password. Please choose a different password.")
        } else {
            const value = {
                currentPassword : data.currentPassword,
                newPassword: data.newPassword,
                email: user['email']
            }
            try {
                setIsLoading(true);
                await post("user/change-password", value);
                toast.success("Password changed successfully.");
                removeStorage();
                router.push("/login");
            } catch (error: any) {
                toast.error(error?.message || "An error occurred while changing the password.");
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <>
            <div className="text-4xl text-purple-900">Profile</div>
            <div className="text-md text-gray-600 mt-4">
                You can manage your profile here by adding, editing, or deleting them.
            </div>
            <div className="flex justify-start gap-16 items-center my-12">
                <Avatar className="w-28 h-28 bg-purple-50 border-purple-900 border">
                    <AvatarFallback className="text-5xl text-purple-900">
                        {getInitials(user["name"])}
                    </AvatarFallback>
                </Avatar>
                <div className="flex-col">
                    <div className="text-lg text-gray-900 mb-4">{user["name"]}</div>
                    <div className="text-md text-gray-900">{user["email"]}</div>
                </div>
            </div>
            <div className="shadow-md p-8 w-1/2">
                <div className="text-2xl text-purple-900">Change Password</div>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <TextInput
                        label="Current Password"
                        type="password"
                        placeholder="Enter your current password"
                        wrapperStyles="my-8"
                        additionalStyles={errors.currentPassword && "border-red-500"}
                        {...register("currentPassword")}
                        error={errors.currentPassword?.message}
                    />
                    <TextInput
                        label="New Password"
                        type="password"
                        placeholder="Enter your new password"
                        wrapperStyles="my-8"
                        additionalStyles={errors.newPassword && "border-red-500"}
                        {...register("newPassword")}
                        error={errors.newPassword?.message}
                    />
                    <TextInput
                        label="Confirm Password"
                        type="password"
                        placeholder="Confirm your new password"
                        wrapperStyles="my-8"
                        additionalStyles={errors.confirmPassword && "border-red-500"}
                        {...register("confirmPassword")}
                        error={errors.confirmPassword?.message}
                    />
                    <div className="flex justify-center items-center w-full">
                        <PrimaryButton
                            label="Change Password"
                            loading={isLoading}
                            icon={<ArrowRight/>}
                            additionalStyles="mb-8 mt-4 w-48"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Profile;
