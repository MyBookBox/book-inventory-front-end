import { useState } from "react";
import Link from "next/link";
import SecondaryButton from "@/src/components/secondary-button";
import {
  House,
  LibraryBig,
  LogOut,
  UserRoundPen,
  Users,
  Menu,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { getUser, removeStorage } from "@/src/shared/utils/stroge-util";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const user = getUser();

  const getMenuItems = (userRole) => {
    const menuItems = [
      { label: "Home", path: "/home", icon: <House /> },
      { label: "Book", path: "/book", icon: <LibraryBig /> },
      { label: "Profile", path: "/profile", icon: <UserRoundPen /> },
    ];

    if (userRole.includes("Admin")) {
      menuItems.push({ label: "User", path: "/user", icon: <Users /> });
    }
    return menuItems;
  };

  return (
    <nav className="text-white shadow-2xl">
      {/* Top bar for all views */}
      <div className="flex items-center justify-between p-4">
        <Link href="#">
          <img
            src={"/images/logo.png"}
            style={{ objectFit: "cover" }}
            className="w-12 lg:w-32"
            alt="Logo"
          />
        </Link>
        <button
          className="text-purple-900 focus:outline-none lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Menu items for mobile (dropdown) */}
      {menuOpen && (
        <div className="lg:hidden">
          <ul className="space-y-4 p-4">
            {getMenuItems(user ? user["role"] : []).map((item) => (
              <li key={item.path}>
                <Link href={item.path}>
                  <SecondaryButton
                    label={item.label}
                    icon={item.icon}
                    additionalStyles={
                      pathname === item.path ? "underline bg-purple-50" : ""
                    }
                    onClick={() => {
                      setMenuOpen(false); // Close menu on navigation
                      router.push(item.path);
                    }}
                  />
                </Link>
              </li>
            ))}
            <li>
              <Link href="#">
                <SecondaryButton
                  label="Logout"
                  icon={<LogOut />}
                  onClick={() => {
                    removeStorage();
                    router.push("/login");
                  }}
                />
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Sidebar for desktop */}
      <div className="hidden lg:block w-64 h-screen p-4 space-y-4">
        <ul className="space-y-4 mt-4">
          {getMenuItems(user ? user["role"] : []).map((item) => (
            <li key={item.path}>
              <Link href={item.path}>
                <SecondaryButton
                  label={item.label}
                  icon={item.icon}
                  additionalStyles={
                    pathname === item.path ? "underline bg-purple-50" : ""
                  }
                  onClick={() => {
                    router.push(item.path);
                  }}
                />
              </Link>
            </li>
          ))}
          <li>
            <Link href="#">
              <SecondaryButton
                label="Logout"
                icon={<LogOut />}
                onClick={() => {
                  removeStorage();
                  router.push("/login");
                }}
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
