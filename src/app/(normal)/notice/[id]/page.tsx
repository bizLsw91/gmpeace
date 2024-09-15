"use client";

import NoticeDetailSheet from "@/app/_components/Notice/NoticeDetailSheet";
import Spinner from "@/components/shared/spinner";
import AntdBtnCustom from "@/components/shared/ui/AntBtnCustom";
import {useRouter} from "next/navigation";
import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { UploadFile } from "antd";

// 공지사항 데이터 타입 정의
interface INotice {
    id: number;
    user_id: number;
    view_count: number;
    title: string;
    content: string;
    author: string;
    attachments: { name:string,url:string }[]|null;
    photos: string[]|null;
    created_at: string;
    updated_at: string;
}


export default function NoticeDetail({ params }: { params: { id: string } }) {
    const [notice, setNotice] = useState<INotice | null>(null);
    const noticeId = params.id;
    const router = useRouter();

    useEffect(() => {
        // 공지사항 상세 정보 가져오기 (API 호출)
        const fetchNotice = async () => {
            const res = await fetch(`/api/notices/${noticeId}`);
            const data = await res.json();
            setNotice(data);
        };

        fetchNotice();
    }, [noticeId]);

    if (!notice) {
        return <Spinner/>;
    }

    // 업로드 파일 리스트로 변환 (Ant Design Upload 컴포넌트가 사용)
    const fileList: UploadFile[] = notice.attachments
        ? notice.attachments.map((attachment, index) => ({
            uid: String(index),
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
            <div className="flex justify-center mt-6">
                <AntdBtnCustom onClick={handleGoToList} enableHover={false}>목록으로 가기</AntdBtnCustom>
            </div>
        </div>
)
    ;
}
