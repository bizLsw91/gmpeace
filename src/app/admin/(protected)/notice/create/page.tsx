"use client"
import {INoticeFormValue, useCreateNotices} from "@/app/_clientApi/notice";
import {getDefaultLayout, IDefaultLayoutPage} from "@/components/layout/default-layout";
import QuillEditor from "@/components/shared/form/control/quill-editor";
import DefaultForm from "@/components/shared/form/ui/default-form";
import FormGroup from "@/components/shared/form/ui/form-group";
import FormSection from "@/components/shared/form/ui/form-section";
import {PlusOutlined} from "@ant-design/icons";
import {Button, Divider, Form, Input, Upload, UploadFile} from "antd";
import {useForm} from "antd/es/form/Form";
import {RcFile, UploadChangeParam} from "antd/es/upload";
import {useState} from "react";
import Image from "next/image";
import ReactQuill from "react-quill";

const NoticeCreate: IDefaultLayoutPage = ()=> {
    const [form] = useForm();
    const [formData, setFormData] = useState<INoticeFormValue>();
    const {mutate: createNotice} = useCreateNotices()
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const handleFinish = (formValue: INoticeFormValue) => {
        // 이곳에 실제 폼 전송 로직 작성.
        setFormData(formValue);
        console.log("formValue = ", formValue);
        // createNotice(formValue);
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


    return (
        <div className="notice-create pt-10 pb-20">
            <div className="wrapper">
                <div className="flex justify-center font-bold text-2xl mb-14">공지사항 작성</div>
                <DefaultForm<INoticeFormValue>
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
                            <Form.Item name="photos">
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
                    </FormSection>
                    <div className="flex justify-center">
                        <Button htmlType="submit" type="primary">
                            제출
                        </Button>
                    </div>
                </DefaultForm>
                <div className="flex justify-center font-bold text-2xl mb-14">미리보기</div>
                <FormSection>
                    <FormGroup title="제목">
                        <div>{formData?.title}</div>
                    </FormGroup>
                    <Divider/>
                    <FormGroup title={"내용"}>
                        <ReactQuill
                            value={formData?.content}
                            readOnly={true} // 읽기 전용 모드 설정
                            theme="bubble" // 'bubble' 테마는 읽기용 텍스트에 적합
                        />
                    </FormGroup>
                </FormSection>
            </div>
        </div>
    );
}

NoticeCreate.getLayout = getDefaultLayout;
export default NoticeCreate;