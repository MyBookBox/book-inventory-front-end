import DialogWrapper from "@/src/components/dialog-wrapper";
import {FileCheck, FilePenLine} from "lucide-react";
import PrimaryButton from "@/src/components/primary-button";
import {Button} from "@/src/components/ui/button";
import TextInput from "@/src/components/text-input";
import SelectWrapper from "@/src/components/select-wrapper";
import {useState} from "react";

const EditUser = () => {
    const [selectedOption, setSelectedOption] = useState<string>("");

    const handleSelectChange = (value: string) => {
        setSelectedOption(value);
        console.log("Selected:", value);
    };

    const roles = [
        {value: "admin", label: "Admin"},
        {value: "user", label: "User"},
    ];


    const status = [
        {value: "active", label: "Active"},
        {value: "deleted", label: "Deleted"},
    ];

    return (
        <DialogWrapper
            trigger={<FilePenLine className='cursor-pointer me-2 hover:text-purple-900'/>}
            title="Update User Details"
            description="Edit the user details here and click save to apply your changes."
            footer={
                <div className="flex justify-end gap-8">
                    <Button
                        variant="link"
                        className='text-purple-600'>
                        Close
                    </Button>
                    <PrimaryButton label='Save' icon={<FileCheck/>}/>
                </div>
            }
        >
            <div>
                <TextInput
                    label='Full Name'
                    placeholder='Enter user fullname'
                    wrapperStyles='mb-4'
                />
                <TextInput
                    label='Email'
                    placeholder='Enter user email'
                    wrapperStyles='mb-4'
                />
                <TextInput
                    label='Password'
                    placeholder='Enter user password'
                    wrapperStyles='mb-4'
                />
                <SelectWrapper
                    label="Role"
                    options={roles}
                    placeholder="Select user role"
                    wrapperStyles='mb-4'
                    value={selectedOption}
                    onChange={handleSelectChange}
                />
                <SelectWrapper
                    label="Status"
                    options={status}
                    placeholder="Select user status"
                    wrapperStyles='mb-4'
                    value={selectedOption}
                    onChange={handleSelectChange}
                />
            </div>
        </DialogWrapper>
    )
}

export default EditUser