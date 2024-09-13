import {INoticeFormValue} from "@/types/notice";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import axios from "axios";

export const useNotices = (currPage:number) => {
    return useQuery({
        queryKey:['notices'],
        queryFn: ()=>axios.get(`/api/notices?page=${currPage||1}` )});
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