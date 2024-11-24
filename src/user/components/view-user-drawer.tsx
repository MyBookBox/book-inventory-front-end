import DrawerWrapper from "@/src/components/drawer-wrapper";
import {Ellipsis} from "lucide-react";

const ViewUserDrawer = () => {
    return (
        <DrawerWrapper
            trigger={<Ellipsis className='cursor-pointer mx-2 hover:text-purple-900'/>}
            title="User Details"
            description="View the complete details of the user"
            footer={
                <div className="flex justify-end gap-2">
                </div>
            }
        >
            <div className='ms-16'>
                <table>
                    <tr>
                        <td className='text-sm text-gray-600 py-2'>User Full name</td>
                        <td className='text-sm text-gray-900 ps-16'>Dilani Karthigesu</td>
                    </tr>
                    <tr>
                        <td className='text-sm text-gray-600 py-2'>User Email</td>
                        <td className='text-sm text-gray-900 ps-16'>dilani@gmail.com</td>
                    </tr>
                    <tr>
                        <td className='text-sm text-gray-600 py-2'>User Role</td>
                        <td className='text-sm text-gray-900 ps-16'>Admin</td>
                    </tr>
                    <tr>
                        <td className='text-sm text-gray-600 py-2'>User Status</td>
                        <td className='text-sm text-gray-900 ps-16'>
                            <div
                                key="status-2"
                                className="bg-red-100 w-28 text-center text-red-900 rounded-full p-2"
                            >
                                Deleted
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </DrawerWrapper>
    )
}

export default ViewUserDrawer