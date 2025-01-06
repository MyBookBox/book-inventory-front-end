import DialogWrapper from "@/src/components/dialog-wrapper";
import { FileCheck, FilePenLine, FilePlus } from "lucide-react";
import PrimaryButton from "@/src/components/primary-button";
import TextInput from "@/src/components/text-input";
import React, { useState } from "react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import SelectWrapper from "@/src/components/select-wrapper";

type Props = {
  user?: {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    role?: string[];
    status?: string;
  };
  isEdit?: boolean;
  handleUserCreate?: (userData: any) => Promise<void>;
  handleUserEdit?: (userData: any) => Promise<void>;
};

const signupSchema = z.object({
  name: z
    .string()
    .min(4, "Name must be at least 4 characters")
    .nonempty("Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
  role: z.string().nonempty("Role is required"),
  id: z.string().optional(),
});

const userEditSchema = z.object({
  name: z
    .string()
    .min(4, "Name must be at least 4 characters")
    .nonempty("Name is required"),
  role: z.string().nonempty("Role is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  status: z.string().nonempty("Status is required"),
  id: z.number().optional(),
});

type SignupFormValues = z.infer<typeof signupSchema>;
type UserEditFormValues = z.infer<typeof userEditSchema>;

const EditUser = ({
  user,
  isEdit = false,
  handleUserCreate,
  handleUserEdit,
}: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<SignupFormValues | UserEditFormValues>({
    resolver: zodResolver(isEdit ? userEditSchema : signupSchema),
    defaultValues: {
      id: user?.id || "",
      name: user?.name || "",
      email: user?.email || "",
      password: user?.password || "",
      role: user?.role?.[0] || "",
      status: user?.status || "",
    },
  });

  const roles = [
    { value: "Admin", label: "Admin" },
    { value: "User", label: "User" },
  ];

  const statusOptions = [
    { value: "Active", label: "Active" },
    { value: "Deactivated", label: "Deactivated" },
  ];

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);

  const onSubmit = async (data: SignupFormValues | UserEditFormValues) => {
    try {
      setIsLoading(true);

      if (isEdit) {
        await handleUserEdit(data);
      } else {
        await handleUserCreate(data);
      }

      reset({
        id: "",
        name: "",
        email: "",
        password: "",
        role: "",
      });

      handleCloseDialog();
    } catch (error: any) {
      toast.error(error.message || "An error occurred while saving the user.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isEdit ? (
        <FilePenLine
          className="cursor-pointer me-2 hover:text-purple-900"
          onClick={handleOpenDialog}
        />
      ) : (
        <PrimaryButton
          loading={isLoading}
          label="Add User"
          onClick={handleOpenDialog}
          icon={<FilePlus />}
        />
      )}
      <DialogWrapper
        trigger={<></>}
        title={isEdit ? "Update User Details" : "Create a New User"}
        description={
          isEdit
            ? "Edit the user details here and click save to apply your changes."
            : "Enter the user details and click save to apply your changes."
        }
        footer={<></>}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      >
        <div>
          <TextInput
            label="Name"
            placeholder="Enter name"
            error={errors.name?.message}
            {...register("name")}
          />
          {!isEdit && (
            <TextInput
              label="Email"
              placeholder="Enter email"
              wrapperStyles="my-4"
              error={errors?.email?.message}
              {...register("email")}
            />
          )}
          {!isEdit && (
            <TextInput
              label="Password"
              type="password"
              placeholder="Enter password"
              wrapperStyles="my-4"
              error={errors?.password?.message}
              {...register("password")}
            />
          )}
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <SelectWrapper
                label="Role"
                options={roles}
                placeholder="Select user role"
                wrapperStyles="my-4"
                error={errors.role?.message}
                {...field}
              />
            )}
          />
          {isEdit && (
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <SelectWrapper
                  label="Status"
                  options={statusOptions}
                  placeholder="Select user status"
                  wrapperStyles="my-4"
                  error={errors?.status?.message}
                  {...field}
                />
              )}
            />
          )}
          <div className="w-full flex justify-end items-end">
            <PrimaryButton
              label="Save"
              icon={<FileCheck />}
              loading={isLoading}
              additionalStyles="mt-8 w-32"
              onClick={handleSubmit(onSubmit)}
            />
          </div>
        </div>
      </DialogWrapper>
    </>
  );
};

export default EditUser;
