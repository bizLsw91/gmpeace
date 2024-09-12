import {QueryClient, useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import qs from "qs";
import useSWR from "swr";
import { fetchApi } from "./base";

const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT
const fetcher = (url:string) => fetch(url).then(res => res.json());

export interface INotice {
    id: number;
    title: string;
    content: string;
    author: string;
    createdAt: string;
    updatedAt: string;
}

export interface INoticeFormValue extends Omit<INotice, "id" | "createdAt" | "updatedAt"> {}

interface INoticesParams {
    page?: number;
}

export interface INoticesResponse {
    items: INotice[];
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

export const useNotice = (id: string | number) => {
    return useSWR<INoticeResponse>(`api/notices/${id}`);
};

export const createNotice = (value: INoticeFormValue) => {
    return fetchApi.post(`api/notices`, { body: JSON.stringify(value) });
};

export const updateNotice = (id: string, value: INoticeFormValue) => {
    return fetchApi.put(`api/notices/${id}`, { body: JSON.stringify(value) });
};

export const useNotices = (params: INoticesParams) => {
    return useQuery({
        queryKey:['notices', params],
        queryFn: ()=>axios.get(endpoint + `/api/notices?${qs.stringify(params)}` )});
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