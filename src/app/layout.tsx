import Banner from "@/app/_components/Banner/Banner";
import TabArea from "@/app/_components/TabArea/TabArea";
import Footer from "@/app/_components/Footer/Footer";
import Header from "@/app/_components/Header/Header";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import "../assets/style/tailwind/index.css"
import "../assets/style/scss/index.scss"
import {Suspense} from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "4회 광명시평화주간",
    description: "4회 광명시 평화주간 '평화로운 광명생활', '평화, 광명이 잇다'",
    keywords: "광명시평화주간 광명시평화포럼 광명포럼 평화정원 평화도시 학생미술대회",
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        }
    },
    openGraph: {
        title: '제4회 광명시평화주간',
        description: "'4회 광명시 평화주간 '평화로운 광명생활', '평화, 광명이 잇다'",
        type: 'website',
        url: 'https://www.gmpeace.or.kr/',
        siteName: '제4회 광명시평화주간',
        locale: 'ko_KR',
        images: [
            {
                url: 'https://www.gmpeace.or.kr/_next/images/openGraphImg.png', // open graph image url
                width: 800,
                height: 600,
                alt: '광명시평화주간', // open graph image alt
            },
            // ... {} 여러개 추가 가능
        ],
    },
};

export default function RootLayout({
                                       children
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="kor">
        <body className={inter.className}>
        <Header/>
        <Suspense fallback={<div>Loading...</div>}>
            <Banner/>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
            <TabArea/>
        </Suspense>
        <div className={'container'}>
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    );
}
