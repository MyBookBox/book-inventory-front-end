"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { cn } from "./utils";

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
  error?: string; // Optional error message
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
  error,
}) => {
  const uniqueId = React.useId(); // Generate a unique ID for accessibility

  return (
    <div className={cn("flex flex-col space-y-2", wrapperStyles)}>
      {label && (
        <label htmlFor={uniqueId} className="text-sm">
          {label}
        </label>
      )}
      <Select
        onValueChange={(selectedValue) => onChange?.(selectedValue)}
        disabled={disabled}
        value={value || undefined} // Ensure undefined when no value is passed
      >
        <SelectTrigger
          id={uniqueId}
          className={cn(
            "border border-purple-300 focus:border-purple-600 rounded-md",
            error ? "border-red-500 focus:border-red-600" : "",
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
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default SelectWrapper;
