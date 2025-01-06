import DrawerWrapper from "@/src/components/drawer-wrapper";
import { Ellipsis } from "lucide-react";

type Props = {
  book: any;
};

const ViewBookDrawer = ({ book }: Props) => {
  return (
    <DrawerWrapper
      trigger={
        <Ellipsis className="cursor-pointer mx-2 hover:text-purple-900" />
      }
      title="Book Details"
      description="View the complete details of the book"
      footer={<div className="flex justify-end gap-2"></div>}
    >
      <div className="ms-16">
        <table>
          <tr>
            <td className="text-sm text-gray-600 py-2">Book Title</td>
            <td className="text-sm text-gray-900 ps-16">{book["title"]}</td>
          </tr>
          <tr>
            <td className="text-sm text-gray-600 py-2">Book Description</td>
            <td className="text-sm text-gray-900 ps-16">
              {book["description"]}
            </td>
          </tr>
          <tr>
            <td className="text-sm text-gray-600 py-2">Book Author</td>
            <td className="text-sm text-gray-900 ps-16">{book["author"]}</td>
          </tr>
          <tr>
            <td className="text-sm text-gray-600 py-2">Book Genre</td>
            <td className="text-sm text-gray-900 ps-16">{book["genre"]}</td>
          </tr>
          <tr>
            <td className="text-sm text-gray-600 py-2">Book Publish Date</td>
            <td className="text-sm text-gray-900 ps-16">
              {book["publish_date"]}
            </td>
          </tr>
          <tr>
            <td className="text-sm text-gray-600 py-2">Book Price</td>
            <td className="text-sm text-gray-900 ps-16">Rs. {book["price"]}</td>
          </tr>
          <tr>
            <td className="text-sm text-gray-600 py-2">Book Quantity</td>
            <td className="text-sm text-gray-900 ps-16">{book["quantity"]}</td>
          </tr>
          <tr>
            <td className="text-sm text-gray-600 py-2">Book Status</td>
            <td className="text-sm text-gray-900 ps-16">
              <div
                key={`status2`}
                className={`w-28 text-center rounded-full p-2 ${
                  book.status == "In Stock"
                    ? "bg-purple-100 text-purple-900"
                    : "bg-red-100 text-red-900"
                }`}
              >
                {book["status"]}
              </div>
            </td>
          </tr>
        </table>
      </div>
    </DrawerWrapper>
  );
};

export default ViewBookDrawer;
