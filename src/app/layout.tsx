export const metadata: Metadata = {
    title: "제4회 광명시 평화주간 2024",
    description: "제4회 광명시 평화주간 2024",
    keywords: '제4회 광명시 평화주간',
    creator: 'dev Lee SeongWoong',
    icons: 'https://firebasestorage.googleapis.com/v0/b/gmpeace-76b43.appspot.com/o/images%2Ffavicon.png?alt=media&token=d167623e-bbbe-46e2-8a6a-0ac50631a6bf',
    robots: {
        index: false,       // 페이지를 인덱싱할지 여부 (true로 설정하면 인덱싱 가능)
        follow: true,      // 페이지의 링크를 따라갈지 여부
        nocache: false,    // 페이지를 캐시하지 않을지 여부 (false이면 캐시 허용)
        googleBot: {
            index: true,     // 구글봇에 대한 별도의 설정
            follow: true,
            noimageindex: false, // 이미지 인덱싱을 허용할지 여부
            "max-snippet": -1,   // 스니펫의 최대 길이 (-1이면 제한 없음)
            "max-image-preview": 'large', // 이미지 미리보기 크기 제한
            "max-video-preview": -1,     // 비디오 미리보기 길이 제한
        },
    },
    openGraph: {
        title: '제4회 광명시 평화주간',
        description: "제4회 광명시 평화주간",
        type: 'website',
        url: 'https://www.gmpeace.co.kr',
        siteName: '제4회 광명시 평화주간',
        locale: 'ko_KR',
        images: [
            {
                url: 'https://firebasestorage.googleapis.com/v0/b/gmpeace-76b43.appspot.com/o/images%2FopenGraphImg.png?alt=media&token=a7199ed5-5b81-4f8e-b31e-fff2f49e8249', // open graph image url
                width: 800,
                height: 600,
                alt: '제4회 광명시 평화주간', // open graph image alt
            },
            // ... {} 여러개 추가 가능
        ],
    },
    twitter:{
        card: 'summary_large_image',
        title:'제4회 광명시 평화주간',
        description: "제4회 광명시 평화주간",
        images: ['https://firebasestorage.googleapis.com/v0/b/gmpeace-76b43.appspot.com/o/images%2FopenGraphImg.png?alt=media&token=a7199ed5-5b81-4f8e-b31e-fff2f49e8249']
    },
    verification:{
        other: {
            'naver-site-verification': 'db985657c41437fce9f70ab3fc7aa35afa629571',
        },
    }
};

import Banner from "@/app/_components/Banner/Banner";
import TabArea from "@/app/_components/TabArea/TabArea";
import Footer from "@/app/_components/Footer/Footer";
import Header from "@/app/_components/Header/Header";
import type {Metadata} from "next";
import "../assets/style/tailwind/index.css"
import "../assets/style/scss/index.scss"
import {Suspense} from "react";


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
