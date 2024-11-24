import {FileX} from "lucide-react";
import AlertDialogWrapper from "@/src/components/alert-dialog-wrapper";

const DeleteBook = () => {
    const handleConfirm = () => {
        console.log("Confirmed!");
    };

    const handleCancel = () => {
        console.log("Cancelled!");
    };
    return (
        <AlertDialogWrapper
            trigger={ <FileX className='cursor-pointer mx-2 hover:text-purple-900'/>}
            title="Delete Confirmation"
            description="Are you sure you want to delete this book?  This action cannot be undone."
            confirmLabel="Delete"
            cancelLabel="Cancel"
            onConfirm={handleConfirm}
            onCancel={handleCancel}
        />
    )
}

export default DeleteBook