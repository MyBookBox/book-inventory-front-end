"use client";
import TableWrapper from "../../src/components/TableWrapper";
import ViewUserDrawer from "../../src/user/components/view-user-drawer";
import DeleteUser from "../../src/user/components/delete-user";
import EditUser from "../../src/user/components/edit-user";
import React,{ useEffect, useState } from "react";
import { del, get, patch, post } from "../../src/service/request";
import { toast } from "react-toastify";

const User = () => {
  const headers = ["No", "Full Name", "Email", "Role", "Status", "Action"];
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const footerContent = `Total Records: ${users.length}`;

  const fetchDataFromAPI = async () => {
    try {
      setIsLoading(true);
      const response = await get("user");
      setUsers(response);
    } catch (e: any) {
      toast.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const processData = (apiResponse: any) => {
    return apiResponse.map((item:any, index: number) => [
      `${index + 1}`, // Serial number
      item.name || "N/A", // User name
      item.email || "N/A", // Email
      item.role || "User", // Role
      <div
        key={`status-${index + 1}`}
        className={`w-28 text-center rounded-full p-2 ${
          item.status === "Active"
            ? "bg-purple-100 text-purple-900"
            : "bg-red-100 text-red-900"
        }`}
      >
        {item.status}
      </div>,
      <div key={`action-${index + 1}`} className="flex">
        <EditUser user={item} isEdit={true} handleUserEdit={handleUserEdit} />
        <DeleteUser user={item} handleUserDelete={handleUserDelete} />
        <ViewUserDrawer user={item} />
      </div>,
    ]);
  };

  const handleUserDelete = async (deletedUser: any) => {
    try {
      await del(`user/${deletedUser.id}`);
      toast.success("User successfully deleted");
      setUsers((prevUsers) =>
        prevUsers.filter((user: any) => user.id !== deletedUser.id)
      );
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

  const handleUserCreate = async (data: any) => {
    try {
      const request = {
        name: `${data["name"]}`,
        email: data["email"],
        password: data["password"],
        role: [data["role"]],
      };
      setIsLoading(true);
      const response = await post("user/signup", request);
      setUsers((prevData: any) => [...prevData, response]);
      toast.success("Successfully user created");
    } catch (e: any) {
      toast.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUserEdit = async (data: any) => {
    try {
      const request = {
        name: `${data["name"]}`,
        email: data["email"],
        role: [data["role"]],
        status: data["status"],
      };
      setIsLoading(true);
      const response = await patch(`user/${data["id"]}`, request);
      const index = users.findIndex((user: any) => user?.id === data?.id);
      const updatedUsers = [...users];
      updatedUsers[index] = response;
      setUsers(updatedUsers);
      toast.success("Successfully user updated");
    } catch (e: any) {
      toast.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  return (
    <>
      <div className="text-4xl text-purple-900">Users</div>
      <div className="text-md text-gray-600 mt-4">
        You can manage your user here by adding, editing, or deleting them.
      </div>
      <div className="flex justify-end">
        <div className="w-40">
          <EditUser
            user={{ name: "", email: "", role: [] }}
            isEdit={false}
            handleUserCreate={handleUserCreate}
          />
        </div>
      </div>
      <div className="mt-8">
        <TableWrapper
          headers={headers}
          data={processData(users)}
          footerContent={footerContent}
          className="border border-gray-200"
        />
      </div>
    </>
  );
};
export default User;
