"use client";

import NoticeDetailSheet from "@/app/_components/Notice/NoticeDetailSheet";
import Spinner from "@/components/shared/spinner";
import AntdBtnCustom from "@/components/shared/ui/AntBtnCustom";
import {INotice} from "@/types/notice";
import axios from "axios";
import Image from "next/image";
import {useRouter} from "next/navigation";
import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import {Carousel, UploadFile} from "antd";

// 알림 데이터 타입 정의

export default function NoticeDetail({ params }: { params: { id: string } }) {
    const [notice, setNotice] = useState<INotice>();
    const noticeId = params.id;
    const router = useRouter();

    useEffect(() => {
        axios.post(`/api/notices/${noticeId}/view`);

        // 공지사항 상세 정보 가져오기 (API 호출)
        const fetchNotice = async () => {
            const res = await fetch(`/api/notices/${noticeId}`);
            const data = await res.json();
            setNotice(data);
        };

        fetchNotice();
    }, [noticeId]);

    if (!notice) {
        return <Spinner />;
    }

    // 업로드 파일 리스트로 변환 (Ant Design Upload 컴포넌트가 사용)
    const fileList: UploadFile[] = notice.attachments
        ? notice.attachments.map((attachment, index) => ({
            uid: attachment.uid,
            name: attachment.name,
            url: attachment.url,
            status: "done", // 업로드 완료 상태
        }))
        : [];

    const handleGoToList = () => {
        router.push('/notice')
    }

    return (
        <div className="notice-detail max-w-3xl mx-auto p-5 pb-20">
            <NoticeDetailSheet notice={notice} fileList={fileList} />
            <Carousel effect={'fade'} arrows autoplay>
                {notice.photos?.map((photo, index) => (
                    <div key={index} >
                        <Image src={photo.url} alt={`Slide ${index}`} width={1200} height={800}/>
                    </div>
                ))}
            </Carousel>
            <div className="flex justify-center mt-6">
                <AntdBtnCustom onClick={handleGoToList} enablehover={'false'}>목록으로 가기</AntdBtnCustom>
            </div>
        </div>
)
    ;
}
