"use client"
import AdminHeader from "@/app/_components/Header/AdminHeader";
import Loading from "@/app/admin/loading";
import AuthProvider from "@/lib/auth/auth-provider";
import {ConfigProvider} from "antd";
import {SessionProvider} from "next-auth/react";
import koKR from "antd/locale/ko_KR";
import "../../assets/style/tailwind/index.css"

import {Suspense} from "react";

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
                            <Suspense fallback={<Loading/>}>
                                {children}
                            </Suspense>
                        </div>
                    </AuthProvider>
                </SessionProvider>
            </ConfigProvider>
        </>
    );
}
