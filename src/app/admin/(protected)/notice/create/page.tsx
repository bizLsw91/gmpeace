"use client"
import AntdBtnCustom from "@/components/shared/ui/AntBtnCustom";
import {storage} from "@/firebase/firebase.client.config";
import {INoticeAntdFormValue, INoticeFormValue} from "@/types/notice";
import {useCreateNotices} from "@/app/api/(client)/queries/notice"
import {getDefaultLayout, IDefaultLayoutPage} from "@/components/layout/default-layout";
import QuillEditor from "@/components/shared/form/control/quill-editor";
import DefaultForm from "@/components/shared/form/ui/default-form";
import FormGroup from "@/components/shared/form/ui/form-group";
import FormSection from "@/components/shared/form/ui/form-section";
import {PlusOutlined} from "@ant-design/icons";
import {deleteObject, getDownloadURL, listAll, ref, uploadBytes} from "@firebase/storage";
import {Box, LinearProgress, LinearProgressProps, Typography} from "@mui/material";
import {Button, Divider, Form, Input, Upload, UploadFile} from "antd";
import {useForm} from "antd/es/form/Form";
import { UploadChangeParam} from "antd/es/upload";
import moment from "moment";
import {useSession} from "next-auth/react";
import {useState} from "react";

// firebase의 Storage에 파일 업로드 및 URL 반환
async function uploadToFirestore(file: File, path: string): Promise<string> {
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
}

async function deleteFolderContents(folderPath: string): Promise<void> {
    const folderRef = ref(storage, folderPath);

    try {
        const listResult = await listAll(folderRef);
        const deletePromises = listResult.items.map((itemRef) => deleteObject(itemRef));

        await Promise.all(deletePromises);
        console.log('Folder contents deleted successfully');
    } catch (error) {
        console.error('Error deleting folder contents:', error);
    }
}

function LinearProgressWithLabel(props: LinearProgressProps & { now: number, tot: number }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', width:50}}
                >{`${props.now}/${props.tot}`}</Typography>
            </Box>
        </Box>
    );
}

let initialForm = {
    title: '',
    content: '',
    attachments: {
        fileList: []
    },
    photos: {
        fileList: []
    }
};

const AdminNoticeCreate: IDefaultLayoutPage = () => {
    const [form] = useForm();
    const {data:session} = useSession()
    const {mutateAsync: createNotice,isPending,status} = useCreateNotices()
    const [formData, setFormData] = useState<INoticeAntdFormValue>(initialForm);
    const [imgList, setImgList] = useState<UploadFile[]>([]);
    const [attachmentList, setAttachmentList] = useState<UploadFile[]>([]); // 파일 리스트
    const [uploadCnt, setUploadCnt] = useState(0);
    const [totCnt, setTotCnt] = useState(0);
    const [progress, setProgress] = useState(0);
    const [editorText, setEditorText] = useState('');
    console.log("status = ", status);
    // Firestore에 파일 업로드 함수 (firebase-admin 사용)

    const handleFinish = async (formDataOutput:INoticeAntdFormValue) => {
        if(formData.title.length<2) {
            alert('제목을 2자 이상 입력하세요.')
            return;
        }
        if(editorText.length<5) {
            alert('내용을 5글자 이상 입력하세요.')
            return;
        }

        console.log("formDataOutput = ", formData);
        const totCntToUpload = (formDataOutput.photos?.fileList?.length || 0) + (formDataOutput.attachments?.fileList?.length || 0)
        console.log("totCntToUpload = ", totCntToUpload);
        setTotCnt(totCntToUpload)
        const uniqueFolderName = moment().format('YYYYMMDD_HHmmssSSS')
        try {
            // attachments와 photos에 대한 파일 업로드 및 URL 가져오기, progress 세팅
            const attachmentUrls = await Promise.all(
                formDataOutput.attachments?.fileList?.map(async (uploadFile) => {
                    if (uploadFile.originFileObj) {
                        const url = await uploadToFirestore(uploadFile.originFileObj as File, `notices/attachments/${uniqueFolderName}/${uploadFile.name}`);
                        setUploadCnt((prevCount) => {
                            const newCount = prevCount + 1;
                            console.log("attachments newCount = ", newCount);
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
                        const url = await uploadToFirestore(uploadFile.originFileObj as File, `notices/photos/${uniqueFolderName}/${uploadFile.name}`);
                        setUploadCnt((prevCount) => {
                            const newCount = prevCount + 1;
                            console.log("photos newCount = ", newCount);
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
                user_id: Number(session?.user?.id) || 0,
                title: formDataOutput.title,
                content: formDataOutput.content,
                attachments: attachmentUrls.filter(Boolean) as { name: string; url: string }[], // Null 값 필터링
                photos: photoUrls.filter(Boolean) as string[], // Null 값 필터링
            };
            console.log("noticeData = ", noticeData);

            // 알림 생성 API 호출
            await createNotice(noticeData);
            alert('게시물을 업로드하였습니다.')
        } catch (error) {
            alert('게시물 업로드에 실패하였습니다.')
            deleteFolderContents(`notices/attachments/${uniqueFolderName}`)
            deleteFolderContents(`notices/photos/${uniqueFolderName}`)
        }
        form.resetFields();
        setFormData(initialForm)
        setProgress(0)
        setUploadCnt(0)
        setImgList([])
    };
    const handleChange = (changedValues: any, allValues: any) => {
        setFormData(allValues)
        console.log("allValues = ", allValues);
    };

    const openInNewTab = () => {
        window.open('https://www.gmpeace.co.kr/notice', '_blank');
    };

    const handleEditorChange = (content:any, delta:any, source:any, editor:any) => {
        setEditorText(editor.getText().trim())
    };

    // 사진 업로드 핸들러 (미리보기만 제공) - 유효하지 않은 파일을 목록에서 제거
    const handleUploadChange = (info: UploadChangeParam) => {
        const validFiles = info.fileList.filter(file => handleBeforeUpload(file));
        setImgList(validFiles); // 유효한 파일만 파일 리스트에 추가
    };

    // 이미지 파일 확장자 제한
    const handleBeforeUpload = (file: UploadFile) => {
        console.log('%chandleBeforeUpload',"color:blue")
        const isImage = file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif" || file.type === "image/bmp" || file.type === "image/webp";
        console.log("isImage = ", isImage);
        if (!isImage) {
            alert('이미지 파일만 업로드 가능합니다! (jpg, png, gif, bmp, webp)');
        }
        return isImage; // true면 업로드 진행, false면 업로드 방지
    };


    return (
        <div className="admin-notice-create pt-10 pb-20">
            <div className="wrapper">
                <div className="flex justify-center font-bold text-2xl mb-14">알림 작성</div>
                <div className="flex justify-end"><AntdBtnCustom onClick={openInNewTab}>새 탭에서 알림 목록 열기</AntdBtnCustom></div>
                <DefaultForm<INoticeAntdFormValue>
                    form={form}
                    onFinish={handleFinish}
                    onValuesChange={handleChange}
                >
                    <FormSection>
                        <FormGroup title="제목">
                            <Form.Item name="title">
                                <Input placeholder="2자 ~ 60자" maxLength={60}/>
                            </Form.Item>
                        </FormGroup>
                        <Divider/>
                        <FormGroup title="내용">
                            <Form.Item name="content">
                                <QuillEditor placeholder={'내용을 입력하세요.'} onChange={handleEditorChange}/>
                            </Form.Item>
                        </FormGroup>
                        <FormGroup title="사진">
                            <Form.Item name="photos" className={'photos'}>
                                <Upload
                                    listType="picture-card"
                                    fileList={imgList}
                                    multiple
                                    onChange={handleUploadChange} // 미리보기로 파일리스트 업데이트
                                    // beforeUpload={handleBeforeUpload} // 자동 업로드 방지
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
                                    fileList={formData.attachments?.fileList}
                                    multiple
                                    // onChange={handleAttachmentChange} // 첨부파일 리스트 업데이트
                                    beforeUpload={() => false} // 자동 업로드 방지
                                >
                                    <Button icon={<PlusOutlined/>}>파일 추가</Button>
                                </Upload>
                            </Form.Item>
                        </FormGroup>
                    </FormSection>
                    <div className="flex justify-center">
                        <Button htmlType="submit" type="primary" loading={progress!==0 && progress!==100 || isPending}>
                            제출
                        </Button>
                    </div>
                    {
                        progress > 0 &&
                        <div className="flex justify-center mt-4">
                            <Box sx={{width: '60%'}}>
                                <LinearProgressWithLabel value={progress} now={uploadCnt} tot={totCnt}/>
                            </Box>
                        </div>
                    }

                </DefaultForm>
            </div>
        </div>
    );
}

AdminNoticeCreate.getLayout = getDefaultLayout;
export default AdminNoticeCreate;