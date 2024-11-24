"use client";

import * as React from "react";
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
} from "./ui/alert-dialog";
import PrimaryButton from "@/src/components/primary-button";
import {Button} from "@/src/components/ui/button";
import {FileCheck} from "lucide-react";

interface AlertDialogWrapperProps {
    trigger: React.ReactNode;
    title: string;
    description: string;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
}

const AlertDialogWrapper: React.FC<AlertDialogWrapperProps> = ({
                                                                   trigger,
                                                                   title,
                                                                   description,
                                                                   confirmLabel = "Confirm",
                                                                   cancelLabel = "Cancel",
                                                                   onConfirm,
                                                                   onCancel,
                                                               }) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>{description}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className='flex justify-end w-full'>
                    <div>
                        <AlertDialogCancel onClick={onCancel} className='border-0 shadow-none hover:bg-white'>
                            <Button
                                variant="link"
                                className='text-purple-600'
                                onClick={onCancel}>
                                {cancelLabel}
                            </Button>
                        </AlertDialogCancel>
                    </div>
                    <div>
                        <AlertDialogAction onClick={onConfirm} className='bg-white hover:bg-white border-0 shadow-none'>
                            <PrimaryButton onClick={onConfirm} icon={<FileCheck/>} label={confirmLabel}/>
                        </AlertDialogAction>
                    </div>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default AlertDialogWrapper;
