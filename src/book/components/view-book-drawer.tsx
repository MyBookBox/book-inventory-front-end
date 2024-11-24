import DrawerWrapper from "@/src/components/drawer-wrapper";
import {Ellipsis} from "lucide-react";

const ViewBookDrawer = () => {
    return (
        <DrawerWrapper
            trigger={<Ellipsis className='cursor-pointer mx-2 hover:text-purple-900'/>}
            title="Book Details"
            description="View the complete details of the book"
            footer={
                <div className="flex justify-end gap-2">
                </div>
            }
        >
           <div className='ms-16'>
               <table>
                   <tr>
                       <td className='text-sm text-gray-600 py-2'>Book Title</td>
                       <td className='text-sm text-gray-900 ps-16'>My book 1</td>
                   </tr>
                   <tr>
                       <td className='text-sm text-gray-600 py-2'>Book Description</td>
                       <td className='text-sm text-gray-900 ps-16'>description description</td>
                   </tr>
                   <tr>
                       <td className='text-sm text-gray-600 py-2'>Book Author</td>
                       <td className='text-sm text-gray-900 ps-16'>K.Dilani</td>
                   </tr>
                   <tr>
                       <td className='text-sm text-gray-600 py-2'>Book Genre</td>
                       <td className='text-sm text-gray-900 ps-16'>genre</td>
                   </tr>
                   <tr>
                       <td className='text-sm text-gray-600 py-2'>Book Publish Date</td>
                       <td className='text-sm text-gray-900 ps-16'>11/21/1997</td>
                   </tr>
                   <tr>
                       <td className='text-sm text-gray-600 py-2'>Book Price</td>
                       <td className='text-sm text-gray-900 ps-16'>Rs. 1200</td>
                   </tr>
                   <tr>
                       <td className='text-sm text-gray-600 py-2'>Book Quantity</td>
                       <td className='text-sm text-gray-900 ps-16'>15</td>
                   </tr>
                   <tr>
                       <td className='text-sm text-gray-600 py-2'>Book Status</td>
                       <td className='text-sm text-gray-900 ps-16'>
                           <div
                               key="status-2"
                               className="bg-red-100 w-28 text-center text-red-900 rounded-full p-2"
                           >
                               Out of Stock
                           </div>
                       </td>
                   </tr>
               </table>
           </div>
        </DrawerWrapper>
    )
}

export default ViewBookDrawer