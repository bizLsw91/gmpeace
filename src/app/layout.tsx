import Banner from "@/app/_components/Banner/Banner";
import TabArea from "@/app/_components/TabArea/TabArea";
import Footer from "@/app/_components/Footer/Footer";
import Header from "@/app/_components/Header/Header";
import type {Metadata} from "next";
import "../assets/style/tailwind/index.css"
import "../assets/style/scss/index.scss"
import {Suspense} from "react";

export const metadata: Metadata = {
    title: "광명시 평화주간 제4회 - 평화포럼,평화정원 행사",
    description: "평화주간 행사 안내, '평화로운 광명생활', '평화, 광명이 잇다'",
    keywords: ['평화주간', '광명시 평화주간', '광명 평화주간', '광명시평화주간', 'gmpeace', '광명시평화포럼', '평화포럼', '광명포럼', '평화정원', '학생미술대회'],
    creator: 'dev Lee SeongWoong',
    icons: 'https://firebasestorage.googleapis.com/v0/b/gmpeace-76b43.appspot.com/o/images%2Ffavicon.png?alt=media&token=d167623e-bbbe-46e2-8a6a-0ac50631a6bf',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        }
    },
    openGraph: {
        title: '광명시 평화주간 제4회 - 평화포럼,평화정원 행사',
        description: "평화주간 행사 안내, '평화로운 광명생활', '평화, 광명이 잇다'",
        type: 'website',
        url: 'https://www.gmpeace.co.kr',
        siteName: '제4회 광명시 평화주간',
        locale: 'ko_KR',
        images: [
            {
                url: 'https://firebasestorage.googleapis.com/v0/b/gmpeace-76b43.appspot.com/o/images%2FopenGraphImg.png?alt=media&token=a7199ed5-5b81-4f8e-b31e-fff2f49e8249', // open graph image url
                width: 800,
                height: 600,
                alt: '광명시평화주간', // open graph image alt
            },
            // ... {} 여러개 추가 가능
        ],
    },
    twitter:{
        card: 'summary_large_image',
        title:'제4회 광명시 평화주간',
        description: "평화주간 행사 안내, '평화로운 광명생활', '평화, 광명이 잇다'",
        images: ['https://firebasestorage.googleapis.com/v0/b/gmpeace-76b43.appspot.com/o/images%2FopenGraphImg.png?alt=media&token=a7199ed5-5b81-4f8e-b31e-fff2f49e8249']
    },
    verification:{
        other: {
            'naver-site-verification': 'db985657c41437fce9f70ab3fc7aa35afa629571',
        },
    }
};

export default function RootLayout({
                                       children
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="kor">
        <body>
        <Header/>
        <Suspense fallback={<div>Loading...</div>}>
            <Banner/>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
            <TabArea/>
        </Suspense>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
