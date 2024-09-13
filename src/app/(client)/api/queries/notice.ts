//클라이언트에서 사용하는 쿼리들만 모아놓기
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export const useNotices = (currPage:number) => {
    return useQuery({
        queryKey:['notices'],
        queryFn: ()=>axios.get(`/api/notices?page=${currPage||1}` )});
};