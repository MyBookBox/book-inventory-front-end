import './globals.css';
import Layout from "./layout";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {getToken} from "../src/shared/utils/stroge-util";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function MyApp({Component, pageProps}: { Component: React.FC; pageProps: any }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        const token = getToken();
        setIsAuthenticated(!!token);
    }, [pathname]);

    return <>{
        isAuthenticated ? (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        ) : (
            <Component {...pageProps} />
        )}
        <ToastContainer/>
    </>;
}

export default MyApp;
