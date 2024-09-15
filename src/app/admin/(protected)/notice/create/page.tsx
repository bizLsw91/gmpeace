"use client"
import {INoticeAntdFormValue, INoticeFormValue} from "@/types/notice";
import {useCreateNotices} from "@/app/api/(client)/queries/notice"
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
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL } from 'firebase-admin/storage';

// firebase-admin의 Storage에 파일 업로드 및 URL 반환
async function uploadToFirestore(file: File, path: string): Promise<string> {
    // 고유한 파일 이름을 생성하기 위해 UUID를 사용
    const storageRef = storage.file(`${path}/${file.name}`);

    // 파일을 업로드
    await storageRef.save(file, {
        metadata: {
            contentType: file.type,
        },
    });

    // 파일의 URL을 가져오기
    const [url] = await storageRef.getSignedUrl({
        action: 'read',
        expires: '03-01-2500', // URL 만료 기간 설정 (2500년 3월 1일까지)
    });

    return url;
}


const AdminNoticeCreate: IDefaultLayoutPage = () => {
    const [form] = useForm();
    const {mutate: createNotice,isPending,status} = useCreateNotices()
    const [formData, setFormData] = useState<INoticeAntdFormValue>();
    const [imgList, setImgList] = useState<UploadFile[]>([]);
    const [attachmentList, setAttachmentList] = useState<UploadFile[]>([]); // 파일 리스트
    const [uploadCnt, setUploadCnt] = useState(0);
    const [progress, setProgress] = useState(0);
    console.log("status = ", status);
    // Firestore에 파일 업로드 함수 (firebase-admin 사용)

    const handleFinish = async (formData:INoticeAntdFormValue) => {
        const totCntToUpload = imgList.length + attachmentList.length
        const uniqueFolderName = uuidv4();
        try {
            // attachments와 photos에 대한 파일 업로드 및 URL 가져오기
            const attachmentUrls = await Promise.all(
                attachmentList?.map(async (uploadFile) => {
                    if (uploadFile.originFileObj) {
                        const url = await uploadToFirestore(uploadFile.originFileObj as File, `notices/attachments/${uniqueFolderName}`);
                        setUploadCnt((prevCount) => {
                            const newCount = prevCount + 1;
                            setProgress((newCount / totCntToUpload) * 100);
                            return newCount;
                        });
                        return { name: uploadFile.name, url };
                    }
                    return null;
                }) || []
            );

            const photoUrls = await Promise.all(
                imgList?.map(async (uploadFile) => {
                    if (uploadFile.originFileObj) {
                        const url = await uploadToFirestore(uploadFile.originFileObj as File, `notices/photos/${uniqueFolderName}`);
                        setUploadCnt((prevCount) => {
                            const newCount = prevCount + 1;
                            setProgress((newCount / totCntToUpload) * 100);
                            return newCount;
                        });
                        return url;
                    }
                    return null;
                }) || []
            );

            // INoticeFormValue 형태로 데이터 준비
            const noticeData: INoticeFormValue = {
                title: formData.title,
                content: formData.content,
                attachments: attachmentUrls.filter(Boolean) as { name: string; url: string }[], // Null 값 필터링
                photos: photoUrls.filter(Boolean) as string[], // Null 값 필터링
            };

            // 공지사항 생성 API 호출
            createNotice(noticeData);

        } catch (error) {
            alert('게시물 업로드에 실패하였습니다.')
            console.error('Error while creating notice:', error);
        }
        form.resetFields();
    };
    // const handleChange = (changedValues: any, allValues: any) => {
    //     setFormData(allValues)
    //     console.log("allValues = ", allValues);
    // };

    // 사진 업로드 핸들러 (미리보기만 제공)
    const handleUploadChange = (info: UploadChangeParam) => {
        setImgList(info.fileList); // 파일 리스트 설정 (업로드는 아직 하지 않음)
        console.log("imgList = ", info.fileList);
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
                    // onValuesChange={handleChange}
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
                                    fileList={imgList}
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
                        {/*    {imgList.map((file, index) => (*/}
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
                        <Button htmlType="submit" type="primary" loading={isPending}>
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