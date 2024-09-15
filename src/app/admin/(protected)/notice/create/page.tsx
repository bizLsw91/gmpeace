"use client"
import {INoticeAntdFormValue} from "@/types/notice";
import {useCreateNotices} from "@/app/(normal)/api/queries/notice"
import {getDefaultLayout, IDefaultLayoutPage} from "@/components/layout/default-layout";
import QuillEditor from "@/components/shared/form/control/quill-editor";
import DefaultForm from "@/components/shared/form/ui/default-form";
import FormGroup from "@/components/shared/form/ui/form-group";
import FormSection from "@/components/shared/form/ui/form-section";
import {PlusOutlined} from "@ant-design/icons";
import {Button, Divider, Form, Input, Upload, UploadFile} from "antd";
import {useForm} from "antd/es/form/Form";
import { UploadChangeParam} from "antd/es/upload";
import {useState} from "react";
import {storage} from "@/firebase/firebase.admin.config";

const AdminNoticeCreate: IDefaultLayoutPage = () => {
    const [form] = useForm();
    const [formData, setFormData] = useState<INoticeAntdFormValue>();
    const {mutate: createNotice} = useCreateNotices()
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [attachmentList, setAttachmentList] = useState<UploadFile[]>([]); // 파일 리스트

    // Firestore에 파일 업로드 함수 (firebase-admin 사용)

    const handleFinish = () => {
        // 이곳에 실제 폼 전송 로직 작성.

        // 파이어스토어에 이미지들 업로드 후 url[] 가져오기

        // 파이어스토어에 파일들 업로드 후 url[] 가져오기

        // createNotice(formData);
        form.resetFields();
    };
    const handleChange = (changedValues: any, allValues: any) => {
        setFormData(allValues)
        console.log("allValues = ", allValues);
    };

    // 사진 업로드 핸들러 (미리보기만 제공)
    const handleUploadChange = (info: UploadChangeParam) => {
        setFileList(info.fileList); // 파일 리스트 설정 (업로드는 아직 하지 않음)
        console.log("fileList = ", info.fileList);
    };
    // 첨부파일 업로드 핸들러
    const handleAttachmentChange = (info: UploadChangeParam) => {
        setAttachmentList(info.fileList); // 첨부파일 리스트 설정
        console.log("attachmentList = ", info.fileList);
    };

    return (
        <div className="admin-notice-create pt-10 pb-20">
            <div className="wrapper">
                <div className="flex justify-center font-bold text-2xl mb-14">공지사항 작성</div>
                <DefaultForm<INoticeAntdFormValue>
                    form={form}
                    onFinish={handleFinish}
                    onValuesChange={handleChange}
                >
                    <FormSection>
                        <FormGroup title="제목">
                            <Form.Item name="title">
                                <Input placeholder="60자 이하" maxLength={60}/>
                            </Form.Item>
                        </FormGroup>
                        <Divider/>
                        <FormGroup title="내용">
                            <Form.Item name="content">
                                <QuillEditor/>
                            </Form.Item>
                        </FormGroup>
                        <FormGroup title="사진">
                            <Form.Item name="photos" className={'photos'}>
                                <Upload
                                    listType="picture-card"
                                    fileList={fileList}
                                    multiple
                                    onChange={handleUploadChange} // 미리보기로 파일리스트 업데이트
                                    beforeUpload={() => false} // 자동 업로드 방지
                                >
                                    <div>
                                        <PlusOutlined/>
                                        <div style={{marginTop: 8}}>Upload</div>
                                    </div>
                                </Upload>
                            </Form.Item>
                        </FormGroup>
                        {/*<div className="image-preview">*/}
                        {/*    {fileList.map((file, index) => (*/}
                        {/*        <div key={index} className={''}>*/}
                        {/*            <Image*/}
                        {/*                src={URL.createObjectURL(file.originFileObj as RcFile)}*/}
                        {/*                alt={`preview-${file.name}`}*/}
                        {/*                width={100}*/}
                        {/*                height={100}*/}
                        {/*        /></div>*/}
                        {/*    ))}*/}
                        {/*</div>*/}
                        <FormGroup title="첨부파일">
                            <Form.Item name="attachments" className={'attachments'}>
                                <Upload
                                    fileList={attachmentList}
                                    multiple
                                    onChange={handleAttachmentChange} // 첨부파일 리스트 업데이트
                                    beforeUpload={() => false} // 자동 업로드 방지
                                >
                                    <Button icon={<PlusOutlined/>}>파일 추가</Button>
                                </Upload>
                            </Form.Item>
                        </FormGroup>
                    </FormSection>
                    <div className="flex justify-center">
                        <Button htmlType="submit" type="primary">
                            제출
                        </Button>
                    </div>
                </DefaultForm>
            </div>
        </div>
    );
}

AdminNoticeCreate.getLayout = getDefaultLayout;
export default AdminNoticeCreate;