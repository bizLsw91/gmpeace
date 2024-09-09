import AdminHeader from "@/app/_components/Header/AdminHeader";

export default function AdminLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <AdminHeader/>
            <div className="mt-[50px] xs:mt-[70px]">
                {children}
            </div>
        </>
    );
}
