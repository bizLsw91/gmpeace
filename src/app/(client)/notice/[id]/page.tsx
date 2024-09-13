"use client";

import Spinner from "@/components/shared/spinner";
import React from "react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import moment from "moment";

// 공지사항 데이터 타입 정의
interface INotice {
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
    attachments?: { fileName: string; fileUrl: string }[]; // 첨부파일 배열
}

export default function NoticeDetail({params}: {
    params: {
        id: string
    }
}) {
    const [notice, setNotice] = useState<INotice | null>(null);
    const router = useRouter();
    const noticeId = params.id;

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

    return (
        <div className="max-w-3xl mx-auto p-5">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4">{notice.title}</h1>
                <p className="text-gray-600">작성자: 운영사무국</p>

                <div className="flex justify-between mt-2">
                    <p className="text-sm text-gray-500">
                        등록일: {moment(notice.created_at).format("YYYY-MM-DD")}
                    </p>
                    <p className="text-sm text-gray-500">
                        수정일: {moment(notice.updated_at).format("YYYY-MM-DD")}
                    </p>
                </div>

                <hr className="my-4" />

                {/* ReactQuill - 읽기 전용 */}
                <ReactQuill value={notice.content} readOnly={true} theme="bubble" className="bg-gray-50" />

                {/* 첨부파일 섹션 */}
                {notice.attachments && notice.attachments.length > 0 && (
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold mb-2">첨부파일</h2>
                        <ul className="list-disc list-inside">
                            {notice.attachments.map((attachment, index) => (
                                <li key={index}>
                                    <a
                                        href={attachment.fileUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        {attachment.fileName}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
