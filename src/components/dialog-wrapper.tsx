"use client";

import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";
import { cn } from "./utils";

interface DialogWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const DialogWrapper: React.FC<DialogWrapperProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  className,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className={cn("max-w-2xl sm:max-w-lg w-full p-6", className)}
      >
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-2xl font-semibold">
            {title}
          </DialogTitle>
          {description && (
            <DialogDescription className="text-sm sm:text-base text-gray-600 mt-2">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="py-4">{children}</div>
        {footer && <DialogFooter>{footer}</DialogFooter>}
        <DialogClose className="absolute top-4 right-4" onClick={onClose}>
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default DialogWrapper;
