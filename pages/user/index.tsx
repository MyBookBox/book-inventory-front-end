import PrimaryButton from "../../src/components/primary-button";
import {FilePlus} from "lucide-react";
import TableWrapper from "../../src/components/TableWrapper";
import ViewUserDrawer from "../../src/user/components/view-user-drawer";
import DeleteUser from "../../src/user/components/delete-user";
import EditUser from "../../src/user/components/edit-user";

const User = () => {
    const headers = ["No", "Full Name", "Email", "Role", "Status", 'Action'];
    const data = [
        [
            "1",
            "John Doe",
            "dilani@gmail.com",
            "Admin",
            <div
                key="status-1"
                className="bg-purple-100 w-28 text-center text-purple-900 rounded-full p-2"
            >
                Active
            </div>,
            <div key='action-1' className='flex'>
                <EditUser/>
                <DeleteUser/>
                <ViewUserDrawer/>
            </div>
        ],
        [
            "2",
            "John Doe",
            "dilani@gmail.com",
            "Admin",
            <div
                key="status-2"
                className="bg-red-100 w-28 text-center text-red-900 rounded-full p-2"
            >
                Deleted
            </div>,
            <div key='action-2' className='flex'>
                <EditUser/>
                <DeleteUser/>
                <ViewUserDrawer/>
            </div>
        ],
        [
            "3",
            "John Doe",
            "dilani@gmail.com",
            "Admin",
            <div
                key="status-3"
                className="bg-purple-100 w-28 text-center text-purple-900 rounded-full p-2"
            >
                Active
            </div>,
            <div key='action-3' className='flex'>
                <EditUser/>
                <DeleteUser/>
                <ViewUserDrawer/>
            </div>
        ],
    ];
    const footerContent = "Total Records: 3";

    return <>
        <div className='text-4xl text-purple-900'>Users</div>
        <div className='text-md text-gray-600 mt-4'>You can manage your user here by adding, editing, or deleting them.</div>
        <div className='flex justify-end'>
            <div className='w-40'>
                <PrimaryButton label='Add User' icon={<FilePlus/>}/>
            </div>
        </div>
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
export default User