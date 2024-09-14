"use client";

import {ReactQuill} from "@/components/shared/form/control/ReactQuill";
import Spinner from "@/components/shared/spinner";
import AntdBtnCustom from "@/components/shared/ui/AntBtnCustom";
import {useRouter} from "next/navigation";
import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import moment from "moment";
import {Upload, UploadFile, Button } from "antd";

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

function NoticeDetailSheet(props: { notice: INotice, fileList: UploadFile[], onClick: () => void }) {
    return <div className="notice-detail max-w-3xl mx-auto p-5 pb-20">
        <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-lg xs:text-2xl font-bold mb-4">{props.notice.title}</h1>

            <div className="flex justify-between mt-2 flex-wrap gap-3">
                <p className="text-sm text-gray-600">작성자: 운영사무국</p>
                <p className="text-sm text-gray-500">
                    조회수: {props.notice.view_count}
                </p>
            </div>
            <div className="flex justify-between mt-2 flex-wrap gap-3">
                <p className="text-sm text-gray-500">
                    등록일: {moment(props.notice.created_at).format("YYYY-MM-DD")}
                </p>
                <p className="text-sm text-gray-500">
                    수정일: {moment(props.notice.updated_at).format("YYYY-MM-DD")}
                </p>
            </div>

            <hr className="my-4"/>

            {/* Ant Design Upload 컴포넌트를 이용한 첨부파일 섹션 */}
            <div className="mb-4">
                <h2 className="text-md xs:text-lg font-semibold mb-2">첨부파일</h2>
                <Upload
                    fileList={props.fileList} // 기존 첨부파일을 fileList로 표시
                    // listType="picture" // 이미지와 파일을 섞어 표시
                    showUploadList={{showRemoveIcon: false}} // 파일 제거 버튼 숨김
                />
            </div>
            <hr className="my-4"/>

            {/* ReactQuill - 읽기 전용 */}
            <ReactQuill value={props.notice.content} readOnly={true} theme="bubble" className="bg-gray-50"/>
        </div>
        <div className="flex justify-center mt-6">
            <AntdBtnCustom onClick={props.onClick} enableHover={false}>목록으로 가기</AntdBtnCustom>
        </div>
    </div>;
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
        return <Spinner />;
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
        <NoticeDetailSheet notice={notice} fileList={fileList} onClick={handleGoToList}/>
    );
}
