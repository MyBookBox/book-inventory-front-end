import {FileX} from "lucide-react";
import AlertDialogWrapper from "@/src/components/alert-dialog-wrapper";

type Props = {
    user: any;
    handleUserDelete: (user: any) => void;
};

const DeleteUser = ({user, handleUserDelete}: Props) => {
    const handleConfirm = async () => {
        try {
            await handleUserDelete(user);
        } catch (error) {
            console.error("Error during user deletion:", error);
        }
    };

    const handleCancel = () => {
        console.log("Cancelled!");
    };

    return (
        <AlertDialogWrapper
            trigger={<FileX className='cursor-pointer mx-2 hover:text-purple-900'/>}
            title="Delete Confirmation"
            description="Are you sure you want to delete this user?  This action cannot be undone."
            confirmLabel="Delete"
            cancelLabel="Cancel"
            onConfirm={handleConfirm}
            onCancel={handleCancel}
        />
    )
}

export default DeleteUser