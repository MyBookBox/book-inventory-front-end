import { Button } from "@/src/components/ui/button";
import { Loader2 } from "lucide-react";
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

const PrimaryButton = ({
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
        "bg-purple-600 hover:bg-purple-700 text-white w-full",
        additionalStyles
      )}
      onClick={onClick}
    >
      {loading ? (
        <Loader2 className="animate-spin mr-2" />
      ) : (
        <div className={"p-3"} />
      )}
      <span className="flex-grow text-center">{label}</span>
      {icon && <span className="ml-2">{icon}</span>}
    </Button>
  );
};

export default PrimaryButton;
