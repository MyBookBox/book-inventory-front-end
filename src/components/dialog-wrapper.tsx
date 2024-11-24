"use client";

import React from "react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from "./ui/dialog";
import {cn} from "./utils";

interface DialogWrapperProps {
    trigger: React.ReactNode;
    title?: string;
    description?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
}

const DialogWrapper: React.FC<DialogWrapperProps> = ({
                                                         trigger,
                                                         title,
                                                         description,
                                                         children,
                                                         footer,
                                                         className,
                                                     }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className={cn("max-w-xl", className)}>
                <DialogHeader>
                    {title && <DialogTitle>{title}</DialogTitle>}
                    {description && <DialogDescription className="pt-2">{description}</DialogDescription>}
                </DialogHeader>
                <div className="p-4">{children}</div>
                {footer && <DialogFooter>{footer}</DialogFooter>}
                <DialogClose className="absolute top-4 right-4">
                    <span className="sr-only">Close</span>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
};

export default DialogWrapper;
