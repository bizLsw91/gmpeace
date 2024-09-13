//클라이언트에서 사용하는 쿼리들만 모아놓기

// ★★★★★★ 아래와 같이 서버컴포넌트에서도 쓰이는 객체를 가져와서 사용할 때 배포에러가 발생했었다.
// 주석처리하고 자체적으로 만드니까 에러 발생안함!
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