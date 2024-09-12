"use client"
import AdminHeader from "@/app/_components/Header/AdminHeader";
import AuthProvider from "@/lib/auth/auth-provider";
import {ConfigProvider} from "antd";
import {SessionProvider} from "next-auth/react";
import koKR from "antd/locale/ko_KR";

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export default function AdminLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#63489a",
                        colorLink: "#63489a",
                        colorLinkHover: "#7f68a6",
                    },
                }}
                locale={koKR}
            >
                <SessionProvider>
                    <AuthProvider>
                        <AdminHeader/>
                        <div className="pt-[50px] xs:pt-[70px] box-border h-screen">
                            {children}
                        </div>
                    </AuthProvider>
                </SessionProvider>
            </ConfigProvider>
        </>
    );
}
