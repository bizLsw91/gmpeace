import {ReactQuill} from "@/components/shared/form/control/ReactQuill";
import AntdBtnCustom from "@/components/shared/ui/AntBtnCustom";
import {INotice} from "@/types/notice";
import {Upload, UploadFile} from "antd";
import moment from "moment/moment";
import React from "react";

export default function NoticeDetailSheet(props: { notice: INotice, fileList?: UploadFile[] }) {
    return (
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
                {props.fileList ?
                    <Upload
                        fileList={props.fileList} // 기존 첨부파일을 fileList로 표시
                        // listType="picture" // 이미지와 파일을 섞어 표시
                        showUploadList={{showRemoveIcon: false}} // 파일 제거 버튼 숨김
                    /> :
                    <div>첨부파일이 없습니다.</div>
                }

            </div>
            <hr className="my-4"/>

            {/* ReactQuill - 읽기 전용 */}
            <ReactQuill value={props.notice.content} readOnly={true} theme="bubble" className="bg-gray-50"/>
        </div>);
}
