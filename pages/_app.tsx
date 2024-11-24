import './globals.css';
import Layout from "./layout";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";

function MyApp({Component, pageProps}: { Component: React.FC; pageProps: any }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        setIsAuthenticated(!!token);
    }, [pathname]);

    return isAuthenticated ? (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    ) : (
        <Component {...pageProps} />
    );
}

export default MyApp;
