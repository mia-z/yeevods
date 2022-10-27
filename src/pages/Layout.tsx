import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DarkMode from "../hooks/DarkMode";
import { QueryClient, QueryClientProvider } from "react-query";

const qc = new QueryClient();

export const Layout = () => {
    return (
        <QueryClientProvider client={qc}>
            <DarkMode>
                <Header />
                <Outlet />
                <Footer />
            </DarkMode>
        </QueryClientProvider>
    );
}