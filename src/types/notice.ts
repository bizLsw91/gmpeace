import {UploadFile} from "antd";
export interface INotice {
    id: number;
    user_id: number;
    view_count: number;
    title: string;
    content: string;
    author: string;
    attachments: { uid:string, name:string, url:string }[]|null;
    photos: { uid:string, name:string, url:string }[]|null;
    created_at: string;
    updated_at: string;
}

export interface INoticeFormValue extends Omit<INotice, "id" | "view_count" | "author" | "created_at" | "updated_at"> {}
export interface INoticeAntdFormValue {
    title: string;
    content: string;
    attachments?: {
        file?: File;
        fileList: UploadFile[];
    }|{fileList: []};
    photos?: {
        file?: File;
        fileList: UploadFile[];
    }|{fileList: []};
}
export interface INoticeUpdateFormValue extends INoticeFormValue {}

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
