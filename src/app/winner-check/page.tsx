"use client"
import Spinner from "@/components/shared/spinner";
import {Upload, UploadFile} from "antd";
import moment from "moment";

const notice = {
    "id": 1,
    "created_at": "2024-09-13T05:19:38.614656+00:00",
    "title": "2024년 제4회 광명시 평화주간 미술대회 수상자 명단",
    "content": "<p>제4회 광명시 평화주간 미술대회에 참여해 주셔서 감사합니다</p><p><br></p><p>&nbsp;</p><p><br></p><p>수상자 명단 공지합니다</p><p><br></p><p>&nbsp;</p><p><br></p><p>수상한 아이들 축하해주시고</p><p><br></p><p>&nbsp;</p><p><br></p><p>수상을 못한 아이들에게는 더 많은 격려와 다음 기회에 참여 독려 부탁드립니다~</p><p><br></p><p>&nbsp;</p><p><br></p><p>감사합니다</p><p><br></p><p>&nbsp;</p><p><br></p><p>&nbsp;</p><p><br></p><p>* 9월 22일(일) 16시 그림그리기 했던 장소에서 대상, 최우수상, 우수상 시상식 및 상장수료식을 할 예정입니다.&nbsp;</p><p><br></p><p>부득이 시상식에 참석 못 하시는 분은 시상식(22일)이후 광명시청 2층 자치분권과 사무실에서 수령 가능합니다.</p><p><br></p><p>&nbsp;</p><p><br></p><p>* 특선, 입선은 9. 23. ~ 9 27.까지 광명시청 자치분권과 2층 남북교류협력팀에서 수령 가능합니다.</p><p><br></p><p>&nbsp;</p><p><br></p><p>※ 9. 21.~9.22. 제4회 평화주간행사장 안양천에서 특선까지 전시</p><p><br></p><p>&nbsp;</p><p><br></p><p>기타 문의사항은 광명시청 자치분권과 02-2680-6622로 전화주시기 바랍니다</p>",
    "updated_at": "2024-09-13T05:19:38.614656+00:00",
    "view_count": 0,
    "user_id": 1,
    "attachments": [
        {
            "url": "https://firebasestorage.googleapis.com/v0/b/gmpeace-76b43.appspot.com/o/notices%2Fattachments%2F1%2F2024%EB%85%84-%EC%A0%9C4%ED%9A%8C-%ED%8F%89%ED%99%94%EC%A3%BC%EA%B0%84-%EA%B7%B8%EB%A6%BC%EA%B7%B8%EB%A6%AC%EA%B8%B0-%EB%8C%80%ED%9A%8C-%EA%B2%B0%EA%B3%BC.hwp?alt=media&token=de6dd736-dac5-436d-a795-9e592f17ab4c",
            "name": "2024년-제4회-평화주간-그림그리기-대회-결과.hwp"
        }
    ],
    "photos": null,
    "author": "Unknown"
}

import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false, // 서버 사이드 렌더링 비활성화
    loading: () => <Spinner/> // 로딩 중 표시할 컴포넌트
});

export default function WinnerCheck() {
    const fileList: UploadFile[] = notice.attachments
        ? notice.attachments.map((attachment, index) => ({
            uid: String(index),
            name: attachment.name,
            url: attachment.url,
            status: "done", // 업로드 완료 상태
        }))
        : [];


    return (
        <div className="winner-check">
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

                    <hr className="my-4"/>

                    {/* Ant Design Upload 컴포넌트를 이용한 첨부파일 섹션 */}
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold mb-2">첨부파일</h2>
                        <Upload
                            fileList={fileList} // 기존 첨부파일을 fileList로 표시
                            // listType="picture" // 이미지와 파일을 섞어 표시
                            showUploadList={{showRemoveIcon: false}} // 파일 제거 버튼 숨김
                        />
                    </div>
                    <hr className="my-4"/>

                    {/* ReactQuill - 읽기 전용 */}
                    <ReactQuill value={notice.content} readOnly={true} theme="bubble" className="bg-gray-50" style={{padding: '15px'}}/>
                </div>
            </div>
        </div>
    );
}
