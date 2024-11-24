import Link from "next/link";
import SecondaryButton from "@/src/components/secondary-button";
import {House, LibraryBig, LogOut, UserRoundPen, Users} from "lucide-react";
import {useRouter, usePathname} from "next/navigation";

const NavBar = () => {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <nav className="w-64 h-screen shadow-2xl text-white p-4">
            <Link href="#">
                <img
                    src={'/images/logo.png'}
                    style={{
                        objectFit: 'cover',
                    }}
                    className="w-48"
                    alt="Logo"
                />
            </Link>
            <ul className="space-y-4 mt-12">
                {[
                    {label: 'Home', path: '/home', icon: <House/>},
                    {label: 'Book', path: '/book', icon: <LibraryBig/>},
                    {label: 'User', path: '/user', icon: <Users/>},
                    {label: 'Profile', path: '/profile', icon: <UserRoundPen/>},
                ].map((item) => (
                    <li key={item.path}>
                        <Link href={item.path}>
                            <SecondaryButton
                                label={item.label}
                                icon={item.icon}
                                additionalStyles={
                                    pathname == item.path ? "underline bg-purple-50" : ""
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
                            icon={<LogOut/>}
                            onClick={() => {
                                localStorage.setItem('authToken', '')
                                router.push('/login');
                            }}
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
