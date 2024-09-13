import Banner from "@/app/_components/Banner/Banner";
import TabArea from "@/app/_components/TabArea/TabArea";
import Footer from "@/app/_components/Footer/Footer";
import Header from "@/app/_components/Header/Header";
import "../../assets/style/tailwind/index.css"
import "../../assets/style/scss/index.scss"
import {Suspense} from "react";

export default function ClientLayout({
                                       children
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header/>
            <Suspense fallback={<div>Loading...</div>}>
                <Banner/>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <TabArea/>
            </Suspense>
            <div className="min-h-[600px]">
                {children}
            </div>
            <Footer/>
        </>
);
}

