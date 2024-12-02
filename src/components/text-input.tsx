import React, { forwardRef, useState } from "react";
import { Input } from "@/src/components/ui/input";
import { cn } from "@/src/components/utils";
import { Eye, EyeOff } from "lucide-react";

interface Props {
    label: string;
    disabled?: boolean;
    additionalStyles?: string;
    wrapperStyles?: string;
    type?: string; // Type is optional for flexibility
    placeholder?: string;
    icon?: React.ReactNode;
    error?: string;
}

const TextInput = forwardRef<HTMLInputElement, Props>(
    (
        {
            label,
            disabled,
            additionalStyles,
            wrapperStyles,
            type = "text", // Default to text type
            placeholder,
            icon,
            error,
            ...rest
        },
        ref
    ) => {
        const [showPassword, setShowPassword] = useState(false);

        const togglePasswordVisibility = () => {
            setShowPassword((prev) => !prev);
        };

        const isPasswordType = type === "password";

        return (
            <div className={cn("flex flex-col relative", wrapperStyles)}>
                <label className="mb-2 text-sm">{label}</label>
                <div className="relative">
                    <Input
                        ref={ref} // Connect ref here
                        type={isPasswordType && showPassword ? "text" : type}
                        className={cn(
                            "w-full px-2 border border-purple-300 focus:border-purple-600 rounded-md py-2 text-gray-900 placeholder:text-gray-400 ring-0 outline-none",
                            additionalStyles
                        )}
                        placeholder={placeholder}
                        disabled={disabled}
                        {...rest} // Spread other props (like `onChange`)
                    />
                    {isPasswordType && (
                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center text-gray-600 focus:outline-none"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                    )}
                </div>
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
        );
    }
);

TextInput.displayName = "TextInput";

export default TextInput;
