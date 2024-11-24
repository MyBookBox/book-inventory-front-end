import React from "react";
import {Input} from "@/src/components/ui/input";
import {cn} from "@/src/components/utils";

interface Props {
    label: string;
    disabled?: boolean;
    additionalStyles?: string;
    wrapperStyles?: string;
    type?: string;
    placeholder?: string;
    icon?: React.ReactNode;
    error?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const TextInput = ({
                       label, disabled, additionalStyles,wrapperStyles, type, placeholder, icon, error, onChange,

                   }: Props) => {
    return <div className={cn("flex flex-col", wrapperStyles)}>
        <label className="mb-2 text-sm">{label}</label>
        <Input
            type={type}
            className={cn("w-full px-2 border border-purple-300 focus:border-purple-600 rounded-md py-2 text-gray-900 placeholder:text-gray-400 ring-0 outline-none",
                additionalStyles)}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
}

export default TextInput