import DialogWrapper from "@/src/components/dialog-wrapper";
import {FileCheck, FilePenLine} from "lucide-react";
import PrimaryButton from "@/src/components/primary-button";
import {Button} from "@/src/components/ui/button";
import TextInput from "@/src/components/text-input";
import {useState} from "react";
import SelectWrapper from "@/src/components/select-wrapper";

const EditBook = () => {
    const [selectedOption, setSelectedOption] = useState<string>("");

    const handleSelectChange = (value: string) => {
        setSelectedOption(value);
        console.log("Selected:", value);
    };

    const status = [
        {value: "active", label: "Active"},
        {value: "deleted", label: "Deleted"},
    ];
    return (
        <DialogWrapper
            trigger={<FilePenLine className='cursor-pointer me-2 hover:text-purple-900'/>}
            title="Update Book Details"
            description="Edit the book details here and click save to apply your changes."
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
                    label='Title'
                    placeholder='Enter book title'
                    wrapperStyles='mb-4'
                />
                <TextInput
                    label='Description'
                    placeholder='Enter book description'
                    wrapperStyles='mb-4'
                />
                <TextInput
                    label='Author'
                    placeholder='Enter book athor'
                    wrapperStyles='mb-4'
                />
                <TextInput
                    label='Genre'
                    placeholder='Enter book genre'
                    wrapperStyles='mb-4'
                />
                <TextInput
                    label='Publish Date'
                    placeholder='Enter book publish date'
                    wrapperStyles='mb-4'
                />
                <TextInput
                    label='Price'
                    placeholder='Enter book price'
                    wrapperStyles='mb-4'
                />
                <TextInput
                    label='Quantity'
                    placeholder='Enter book quantity'
                    wrapperStyles='mb-4'
                />
                <SelectWrapper
                    label="Status"
                    options={status}
                    placeholder="Select book status"
                    wrapperStyles='mb-4'
                    value={selectedOption}
                    onChange={handleSelectChange}
                />
            </div>
        </DialogWrapper>
    )
}

export default EditBook