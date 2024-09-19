"use client"
import Loading from "@/app/admin/loading";
import AntdBtnCustom from "@/components/shared/ui/AntBtnCustom";
import {storage} from "@/firebase/firebase.client.config";
import {INoticeAntdFormValue, INoticeFormValue, INoticeUpdateFormValue} from "@/types/notice";
import { useNotice, useUpdateNotices} from "@/app/api/(client)/queries/notice"
import {getDefaultLayout, IDefaultLayoutPage} from "@/components/layout/default-layout";
import QuillEditor from "@/components/shared/form/control/quill-editor";
import DefaultForm from "@/components/shared/form/ui/default-form";
import FormGroup from "@/components/shared/form/ui/form-group";
import FormSection from "@/components/shared/form/ui/form-section";
import {PlusOutlined} from "@ant-design/icons";
import {deleteObject, getDownloadURL, listAll, ref, uploadBytes} from "@firebase/storage";
import {Box, LinearProgress, LinearProgressProps, Typography} from "@mui/material";
import {Button, Divider, Form, Input, Spin, Upload, UploadFile} from "antd";
import {useForm} from "antd/es/form/Form";
import { UploadChangeParam} from "antd/es/upload";
import moment from "moment";
import {useSession} from "next-auth/react";
import {useParams, useRouter, useSearchParams} from "next/navigation";
import React, {useEffect, useState} from "react";

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

async function deleteFile(filePath: string): Promise<void> {
    const fileRef = ref(storage, filePath);

    try {
        await deleteObject(fileRef);
        console.log('File deleted successfully');
    } catch (error) {
        console.error('Error deleting file:', error);
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

const AdminNoticeEdit: IDefaultLayoutPage = () => {
    const {id} = useParams()
    const [form] = useForm();
    const {data:session} = useSession()
    const {mutateAsync: updateNotice,isPending,status} = useUpdateNotices(Number(id))
    const {data: notice, isLoading} = useNotice(Number(id))
    const [formData, setFormData] = useState<INoticeAntdFormValue>(notice?.data);
    console.log("formData = ", formData);
    const [imgList, setImgList] = useState<UploadFile[]>([]);
    const [filesToRemove, setFilesToRemove] = useState<string[]>([]);
    const [attachmentList, setAttachmentList] = useState<UploadFile[]>([]); // 파일 리스트
    const [uploadCnt, setUploadCnt] = useState(0);
    const [totUploadCnt, setTotUploadCnt] = useState(0);
    const [removeCnt, setRemoveCnt] = useState(0);
    const [totRemoveCnt, setTotRemoveCnt] = useState(0);
    const [progress_up, setProgress_up] = useState(0);
    const [progress_rm, setProgress_rm] = useState(0);
    const [editorText, setEditorText] = useState('');
    const router = useRouter()
    console.log("notice = ", notice);

    useEffect(()=>{
        if(notice){
            setImgList(notice.data.photos||[])
            setAttachmentList(notice.data.attachments||[])
            form.setFieldsValue(notice.data)
        }
    },[notice])

    const handleFinish = async (formDataOutput:INoticeAntdFormValue) => {
        console.log('formData = ', formData)
        console.log("formDataOutput = ", formDataOutput);
        if(formDataOutput.title.length<2) {
            alert('제목을 2자 이상 입력하세요.')
            return;
        }
        if(formDataOutput.content.length<11) {
            alert('내용을 5글자 이상 입력하세요.')
            return;
        }

        const totCntToUpload = (formDataOutput.photos?.fileList?.filter(photo=>Boolean(photo.originFileObj))?.length || 0) + (formDataOutput.attachments?.fileList?.filter(attachment=>Boolean(attachment.originFileObj))?.length || 0)
        setTotUploadCnt(totCntToUpload)
        const totRemoveCnt = filesToRemove.length;
        setTotRemoveCnt(totRemoveCnt)

        const uniqueFolderName = moment().format('YYYYMMDD_HHmmssSSS')
        try {
            // 삭제
            if (filesToRemove.length > 0) {
                await Promise.all(
                    filesToRemove.map(async (url)=>{
                        await deleteFile(url)
                        setRemoveCnt((prevCount) => {
                            const newCount = prevCount + 1;
                            console.log("removeCnt = ", newCount);
                            setProgress_rm((newCount / totRemoveCnt) * 100);
                            return newCount;
                        });
                    })
                );
            }

            // attachments와 photos에 대한 파일 업로드 및 URL 가져오기, progress_up 세팅

            const photoUrls = await Promise.all(
                imgList?.map(async (uploadFile) => {
                    if (uploadFile.originFileObj) {
                        const url = await uploadToFirestore(uploadFile.originFileObj as File, `notices/photos/${uniqueFolderName}/${uploadFile.name}`);
                        setUploadCnt((prevCount) => {
                            const newCount = prevCount + 1;
                            console.log("photos newCount = ", newCount);
                            setProgress_up((newCount / totCntToUpload) * 100);
                            return newCount;
                        });
                        return { uid: uploadFile.uid ,name: uploadFile.name, url };
                    }
                    else {
                        return { uid: uploadFile.uid ,name: uploadFile.name, url: uploadFile.url };
                    }
                }) || []
            );
            const attachmentUrls = await Promise.all(
                attachmentList?.map(async (uploadFile) => {
                    if (uploadFile.originFileObj) {
                        const url = await uploadToFirestore(uploadFile.originFileObj as File, `notices/attachments/${uniqueFolderName}/${uploadFile.name}`);
                        setUploadCnt((prevCount) => {
                            const newCount = prevCount + 1;
                            console.log("attachments newCount = ", newCount);
                            setProgress_up((newCount / totCntToUpload) * 100);
                            return newCount;
                        });
                        return { uid: uploadFile.uid ,name: uploadFile.name, url };
                    }else {
                        return { uid: uploadFile.uid ,name: uploadFile.name, url: uploadFile.url };
                    }
                }) || []
            );

            // INoticeFormValue 형태로 데이터 준비
            const noticeData: INoticeUpdateFormValue = {
                user_id: Number(session?.user?.id) || 0,
                title: formDataOutput.title,
                content: formDataOutput.content,
                attachments: attachmentUrls.filter(Boolean) as { uid:string, name: string; url: string }[], // Null 값 필터링
                photos: photoUrls.filter(Boolean) as { uid:string, name: string; url: string }[], // Null 값 필터링
            };
            console.log("noticeData = ", noticeData);

            // 알림 생성 API 호출
            await updateNotice(noticeData);
            alert('게시물 수정을 완료하였습니다.')
        } catch (error) {
            alert('게시물 수정에 실패하였습니다.')
            deleteFolderContents(`notices/attachments/${uniqueFolderName}`)
            deleteFolderContents(`notices/photos/${uniqueFolderName}`)
        }
        form.resetFields();
        setUploadCnt(0)
        setRemoveCnt(0)
        setFilesToRemove([])
        setProgress_up(0)
        setProgress_rm(0)
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
    const handleImgChange = (info: UploadChangeParam) => {
        console.log("info.fileList = ", info.fileList);
        const validFiles = info.fileList.filter(file => !file.originFileObj || file.status); //기존파일이거나 새 업로드파일
        setImgList(validFiles); // 유효한 파일만 파일 리스트에 추가
    };

    const handleFileRemove = (file: UploadFile<any>,type:string='img') => {
        console.log("Remove file = ", file);
        if(!file.originFileObj){
            setFilesToRemove(prev=>[...prev, file.url as string])
            console.log("filesToRemove = ", filesToRemove);
        }
        if(type==='img'){
            const newFileList = imgList.filter(item => item.uid !== file.uid);
            setImgList(newFileList);
        }else if(type==='file'){
            const newFileList = attachmentList.filter(item => item.uid !== file.uid);
            setAttachmentList(newFileList);
        }
    }

    // 이미지 파일 확장자 제한
    const handleBeforeUpload = (file: UploadFile,type: string='img') => {
        console.log("handleBeforeUpload file = ", file);
        let list
        if(type==='img') list = imgList;
        else list = attachmentList;

        const isDuplicate = list.some((existingFile) => existingFile.name === file.name);
        if (isDuplicate) {
            alert('이미 업로드된 파일입니다.');
            return false;
        }

        if (type==='img') {
            const isImage = file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif" || file.type === "image/bmp" || file.type === "image/webp";
            if (!isImage) {
                alert('이미지 파일만 업로드 가능합니다! (jpg, png, gif, bmp, webp)');
            }
            return isImage; // true면 업로드 진행, false면 업로드 방지
        }

        return true
    };

    const handleFileChange = (info: UploadChangeParam) => {
        console.log("handleFileChange info.fileList = ", info.fileList);
        const validFiles = info.fileList.filter(file => !file.originFileObj || file.status); //기존파일이거나 새 업로드파일
        // console.log("handleFileChange validFiles = ", validFiles);
        setAttachmentList(validFiles); // 유효한 파일만 파일 리스트에 추가
    }

    const handleGoToList = () => {
        router.push('/admin/notice')
    }

    return (
        <div className="admin-notice-edit pt-10 pb-20">
            <div className="wrapper">
                <div className="flex justify-center font-bold text-2xl mb-14">알림 편집</div>
                <div className="flex justify-between">
                    <div className="flex justify-center mt-6">
                        <AntdBtnCustom onClick={handleGoToList} enablehover={'false'}>목록으로 가기</AntdBtnCustom>
                    </div>
                    <AntdBtnCustom onClick={openInNewTab}>새 탭에서 알림 목록 열기</AntdBtnCustom>
                </div>
                { isLoading ? <Loading /> :
                    <DefaultForm<INoticeFormValue>
                        form={form}
                        onFinish={handleFinish}
                        onValuesChange={handleChange}
                        initialValues={notice?.data}
                    >
                        <FormSection>
                            <FormGroup title="제목">
                                <Form.Item name="title">
                                    <Input placeholder="2자 ~ 60자" maxLength={60} value={notice?.data?.title} />
                                </Form.Item>
                            </FormGroup>
                            <Divider/>
                            <FormGroup title="내용">
                                <Form.Item name="content">
                                    <QuillEditor placeholder={'내용을 입력하세요.'} onChange={handleEditorChange} value={notice?.data?.content}/>
                                </Form.Item>
                            </FormGroup>
                            <FormGroup title="사진">
                                <Form.Item name="photos" className={'photos'}>
                                    <Upload
                                        listType="picture-card"
                                        fileList={imgList}
                                        multiple
                                        onRemove={(file: UploadFile<any>)=>handleFileRemove(file,'img')}
                                        onChange={handleImgChange} // 미리보기로 파일리스트 업데이트
                                        beforeUpload={(file: UploadFile)=>handleBeforeUpload(file, 'img')} // 자동 업로드 방지
                                    >
                                        <div>
                                            <PlusOutlined/>
                                            <div style={{marginTop: 8}}>Upload</div>
                                        </div>
                                    </Upload>
                                </Form.Item>
                            </FormGroup>
                            <FormGroup title="첨부파일">
                                <Form.Item name="attachments" className={'attachments'}>
                                    <Upload
                                        fileList={attachmentList}
                                        multiple
                                        onRemove={(file: UploadFile<any>)=>handleFileRemove(file,'file')}
                                        onChange={handleFileChange} // 첨부파일 리스트 업데이트
                                        beforeUpload={(file: UploadFile)=>handleBeforeUpload(file, 'file')} // 자동 업로드 방지
                                    >
                                        <Button icon={<PlusOutlined/>}>파일 추가</Button>
                                    </Upload>
                                </Form.Item>
                            </FormGroup>
                        </FormSection>
                        <div className="flex justify-center">
                            <Button htmlType="submit" type="primary" loading={progress_up!==0 && progress_up!==100 || isPending}>
                                제출
                            </Button>
                        </div>
                        {
                            progress_rm > 0 &&
                            <div className="flex justify-center mt-4">
                                <div>삭제:&nbsp;&nbsp;</div>
                                <Box sx={{width: '30%'}}>
                                    <LinearProgressWithLabel value={progress_rm} now={removeCnt} tot={totRemoveCnt}/>
                                </Box>
                            </div>
                        }
                        {
                            progress_up > 0 &&
                            <div className="flex justify-center mt-4">
                                <div>업로드:&nbsp;&nbsp;</div>
                                <Box sx={{width: '30%'}}>
                                    <LinearProgressWithLabel value={progress_up} now={uploadCnt} tot={totUploadCnt}/>
                                </Box>
                            </div>
                        }

                    </DefaultForm>
                }
            </div>
        </div>
    );
}

AdminNoticeEdit.getLayout = getDefaultLayout;
export default AdminNoticeEdit;