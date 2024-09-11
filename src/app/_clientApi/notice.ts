import qs from "qs";
import useSWR from "swr";
import { fetchApi } from "./base";

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
    data: {
        items: INotice[];
        page: {
            currentPage: number;
            pageSize: number;
            totalPage: number;
            totalCount: number;
        };
    };
}

export interface INoticeResponse {
    data: INotice;
}

export const useNotices = (params: INoticesParams = {}) => {
    return useSWR<INoticesResponse>(`api/notices?${qs.stringify(params)}`);
};

export const useNotice = (id: string | number) => {
    return useSWR<INoticeResponse>(`api/notices/${id}`);
};

export const createNotice = (value: INoticeFormValue) => {
    return fetchApi.post(`api/notices`, { body: JSON.stringify(value) });
};

export const updateNotice = (id: string, value: INoticeFormValue) => {
    return fetchApi.put(`api/notices/${id}`, { body: JSON.stringify(value) });
};

export const deleteNotice = async (id: string) => {
    return await fetchApi.delete(`api/notices/${id}`);
};