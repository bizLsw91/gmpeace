import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {UploadFile} from "antd";
import axios from "axios";
import qs from "qs";
import { fetchApi } from "./base";

// const fetcher = (url:string) => fetch(url).then(res => res.json());

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

interface INoticesParams {
    page?: number;
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

export const createNotice = (value: INoticeFormValue) => {
    return fetchApi.post(`api/notices`, { body: JSON.stringify(value) });
};

export const updateNotice = (id: string, value: INoticeFormValue) => {
    return fetchApi.put(`api/notices/${id}`, { body: JSON.stringify(value) });
};

export const useNotices = (params: INoticesParams) => {
    return useQuery({
        queryKey:['notices'],
        queryFn: ()=>axios.get(`/api/notices?${qs.stringify(params)}` )});
};
export const useNotice = (param: number) => {
    return useQuery({
        queryKey:['notices', param],
        queryFn: ()=>axios.get( `/api/notices/${param}` )});
};
export const useCreateNotices = () => {
    const queryClient = useQueryClient();
    return useMutation( {
        mutationFn: (body:INoticeFormValue)=> axios.post(`/api/notices`,body),
        onSuccess: () => {
            // 공지사항 삭제 후 캐시를 무효화하여 최신 데이터를 가져옵니다.
            queryClient.invalidateQueries({
                queryKey: ['notices'],
            });
        },
        onError: (error) => {
            console.error('Error creating notices:', error);
        },
    });
};
export const useDeleteNotices = () => {
    const queryClient = useQueryClient();
    return useMutation( {
        mutationFn: (ids:number[])=> axios.delete(`/api/notices`,{data:{ids}}),
        onSuccess: () => {
            // 공지사항 삭제 후 캐시를 무효화하여 최신 데이터를 가져옵니다.
            queryClient.invalidateQueries({
                queryKey: ['notices'],
            });
        },
        onError: (error) => {
            console.error('Error deleting notices:', error);
        },
    });
};