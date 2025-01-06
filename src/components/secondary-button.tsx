import { Button } from "@/src/components/ui/button";
import React from "react";
import { cn } from "@/src/components/utils";

interface Props {
  label: string;
  disabled?: boolean;
  additionalStyles?: string;
  onClick?: () => void;
  loading?: boolean;
  icon?: React.ReactNode;
}

const SecondaryButton = ({
  label,
  disabled,
  additionalStyles,
  onClick,
  loading,
  icon,
}: Props) => {
  return (
    <Button
      disabled={disabled || loading}
      className={cn(
        "bg-white text-md font-normal hover:bg-purple-50 text-purple-900 w-full shadow-none",
        additionalStyles
      )}
      onClick={onClick}
    >
      <div className="flex w-full justify-start items-center">
        {icon && <span className="mr-3">{icon}</span>}
        <span className="flex-grow text-start">{label}</span>
      </div>
    </Button>
  );
};

export default SecondaryButton;
