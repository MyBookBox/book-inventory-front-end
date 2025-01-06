import DrawerWrapper from "@/src/components/drawer-wrapper";
import { Ellipsis } from "lucide-react";

type Props = {
  user: any;
};
const ViewUserDrawer = ({ user }: Props) => {
  return (
    <DrawerWrapper
      trigger={
        <Ellipsis className="cursor-pointer mx-2 hover:text-purple-900" />
      }
      title="User Details"
      description="View the complete details of the user"
      footer={<div className="flex justify-end gap-2"></div>}
    >
      <div className="ms-16">
        <table>
          <tr>
            <td className="text-sm text-gray-600 py-2">User Full name</td>
            <td className="text-sm text-gray-900 ps-16">{user["name"]}</td>
          </tr>
          <tr>
            <td className="text-sm text-gray-600 py-2">User Email</td>
            <td className="text-sm text-gray-900 ps-16">{user["email"]}</td>
          </tr>
          <tr>
            <td className="text-sm text-gray-600 py-2">User Role</td>
            <td className="text-sm text-gray-900 ps-16">{user["role"]}</td>
          </tr>
          <tr>
            <td className="text-sm text-gray-600 py-2">User Status</td>
            <td className="text-sm text-gray-900 ps-16">
              <div
                key={`status-2`}
                className={`w-28 text-center rounded-full p-2 ${
                  user.status === "Active"
                    ? "bg-purple-100 text-purple-900"
                    : "bg-red-100 text-red-900"
                }`}
              >
                {user.status}
              </div>
            </td>
          </tr>
        </table>
      </div>
    </DrawerWrapper>
  );
};

export default ViewUserDrawer;
