import PrimaryButton from "../../src/components/primary-button";
import {FilePlus} from "lucide-react";
import TableWrapper from "../../src/components/TableWrapper";
import ViewBookDrawer from "../../src/book/components/view-book-drawer";
import EditBook from "../../src/book/components/edit-book";
import DeleteBook from "../../src/book/components/delete-book";
import TextInput from "../../src/components/text-input";

const Book = () => {
    const headers = ["No", "Title", "Description", "Author", "Quantity", "Status", 'Action'];
    const data = [
        [
            "1",
            "John Doe",
            "This is description",
            "Dilani",
            56,
            <div
                key="status-1"
                className="bg-purple-100 w-28 text-center text-purple-900 rounded-full p-2"
            >
                In Stock
            </div>,
            <div key='action-1' className='flex'>
                <EditBook/>
                <DeleteBook/>
                <ViewBookDrawer/>
            </div>
        ],
        [
            "2",
            "John Doe",
            "This is description",
            "Dilani",
            56,
            <div
                key="status-2"
                className="bg-red-100 w-28 text-center text-red-900 rounded-full p-2"
            >
                Out of Stock
            </div>,
            <div key='action-2' className='flex'>
                <EditBook/>
                <DeleteBook/>
                <ViewBookDrawer/>
            </div>
        ],
        [
            "3",
            "John Doe",
            "This is description",
            "Dilani",
            56,
            <div
                key="status-3"
                className="bg-purple-100 w-28 text-center text-purple-900 rounded-full p-2"
            >
                In Stock
            </div>,
            <div key='action-3' className='flex'>
                <EditBook/>
                <DeleteBook/>
                <ViewBookDrawer/>
            </div>
        ],
    ];
    const footerContent = "Total Records: 3";

    return <>
        <div className='text-4xl text-purple-900'>Books</div>
        <div className='text-md text-gray-600 my-4'>You can manage your books here by adding, editing, or deleting them.</div>
        <div className='flex justify-end'>
            <div className='w-40'>
                <PrimaryButton label='Add Book' icon={<FilePlus/>}/>
            </div>
        </div>
        <TextInput
            label=''
            placeholder='Search'
            wrapperStyles='my-8'
        />
        <div className='mt-8'>
            <TableWrapper
                headers={headers}
                data={data}
                footerContent={footerContent}
                className="border border-gray-200"
            />
        </div>
    </>
}
export default Book