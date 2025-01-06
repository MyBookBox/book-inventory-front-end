import React from "react";
import NavBar from "../src/shared/components/nav-bar";
import { getUser } from "../src/shared/utils/stroge-util";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const user = getUser();
  return (
    <div className="lg:flex h-screen">
      <NavBar />
      <div className="flex-1 p-8">
        <div className="text-right text-md">
          Hello{" "}
          <span className="font-semibold">
            {user ? user["name"] : ""}! &#x1F44B;
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
