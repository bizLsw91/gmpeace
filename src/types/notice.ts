import {UploadFile} from "antd";
export interface INotice {
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

export interface INoticeFormValue extends Omit<INotice, "id" | "user_id" | "view_count" | "author" | "createdAt" | "updatedAt"> {}
export interface INoticeAntdFormValue {
    title: string;
    content: string;
    attachments: {
        file: File;
        fileList: UploadFile[];
    }|undefined;
    photos: {
        file: File;
        fileList: UploadFile[];
    }|undefined;
}

export interface INoticeDetail {
    title: string;
    content: string;
    view_count: number;
    created_at: string;
    updated_at: string;
    fileList?: UploadFile[]
}

export interface INoticesResponse {
    items: INotice[]|any[]|undefined;
    page: {
        currentPage: number;
        pageSize: number;
        totalPage: number;
        totalCount: number;
    };
}

export interface INoticeResponse {
    data: INotice;
}
