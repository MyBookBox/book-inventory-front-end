import React from "react";
import NavBar from "../src/shared/components/nav-bar";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className="flex h-screen">
            <NavBar/>
            <div className="flex-1 p-8">
                <div className="text-right text-sm">
                    Hello <span className="font-semibold">Dilani!</span>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Layout;
