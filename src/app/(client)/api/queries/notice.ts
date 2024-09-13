import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export const useNotices = (currPage:number) => {
    return useQuery({
        queryKey:['notices'],
        queryFn: ()=>axios.get(`/api/notices?page=${currPage||1}` )});
};