"use client";

import React from "react";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue,} from "./ui/select";
import {cn} from "./utils";

interface Option {
    value: string;
    label: string;
}

interface SelectWrapperProps {
    label?: string;
    options: Option[];
    placeholder?: string;
    disabled?: boolean;
    wrapperStyles?: string;
    onChange?: (value: string) => void;
    value?: string;
    additionalStyles?: string;
}

const SelectWrapper: React.FC<SelectWrapperProps> = ({
                                                         label,
                                                         options,
                                                         placeholder = "Select an option",
                                                         wrapperStyles,
                                                         disabled = false,
                                                         onChange,
                                                         value,
                                                         additionalStyles,
                                                     }) => {
    return (
        <div className={cn("flex flex-col space-y-2",wrapperStyles)}>
            {label && <label className="text-sm">{label}</label>}
            <Select
                onValueChange={onChange}
                disabled={disabled}
                value={value}
            >
                <SelectTrigger
                    className={cn(
                        "border border-purple-300 focus:border-purple-600 rounded-md",
                        additionalStyles
                    )}
                >
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {options.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default SelectWrapper;
