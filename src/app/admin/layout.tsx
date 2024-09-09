"use client"
import AdminHeader from "@/app/_components/Header/AdminHeader";
import {AuthProvider} from "@/lib/auth/auth-provider";
import {SessionProvider} from "next-auth/react";

export default function AdminLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <SessionProvider>
                <AdminHeader/>
                <AuthProvider>
                    <div className="pt-[50px] xs:pt-[70px] box-border h-screen">
                        {children}
                    </div>
                </AuthProvider>
            </SessionProvider>
        </>
    );
}
