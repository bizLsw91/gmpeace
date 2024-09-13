"use client"
import {INotice, useDeleteNotices, useNotices} from "@/app/_clientApi/notice";
import DefaultTable from "@/components/shared/ui/default-table";
import {ISO8601DateTime} from "@/types/common";
import {useQueryClient} from "@tanstack/react-query";
import {MenuProps, Popconfirm} from "antd";
import {ColumnsType} from "antd/es/table";
import moment from "moment";
import Link from "next/link";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useCallback, useMemo, useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import LoadingButton from '@mui/lab/LoadingButton';
import {Button} from "@mui/material";

export default function Notice() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname()

    const page = searchParams.get('page');
    const {data, error, isLoading} = useNotices({page: page ? Number(page) : 1});

    const handleChangePage = useCallback(
        (pageNumber: number) => {
            // 기존 searchParams를 가져와서 새로운 pageNumber로 설정
            const params = new URLSearchParams(searchParams.toString());
            params.set('page', String(pageNumber)); // 새로운 페이지 번호 설정

            // router.push를 사용해 변경된 URL로 이동
            router.push(`${pathname}?${params.toString()}`);
        },
        [router]
    );


    const columns: ColumnsType<INotice> = [
        {
            title: "번호",
            dataIndex: "id",
            width: 70
        },
        {
            title: "제목",
            dataIndex: "title",
        },
        {
            title: "작성자",
            dataIndex: "author",
            width: 150,
        },
        {
            title: "등록일",
            dataIndex: "created_at",
            align: "center",
            width: 110,
            render: (value: string) => {
                return (
                    <div className="text-sm flex flex-wrap gap-1.5">
                        <span className="block">{moment(value).format("YYYY/MM/DD")}</span>
                    </div>
                );
            },
        },
        {
            title: "수정일",
            dataIndex: "updatedAt",
            align: "center",
            width: 110,
            render: (value: ISO8601DateTime) => {
                return (
                    <div className="text-sm flex flex-wrap gap-1.5">
                        <span className="block">{moment(value).format("YYYY/MM/DD")}</span>
                    </div>
                );
            },
        },
    ];


    return (
        <div className="notice pt-10">
            <div className="wrapper">
                <div className="flex justify-center font-bold text-2xl mb-14">알림</div>
                <DefaultTable<INotice>
                    columns={columns}
                    dataSource={data?.data?.items || []}
                    loading={isLoading}
                    pagination={{
                        current: Number(page || 1),
                        defaultPageSize: 5,
                        total: data?.data?.page?.totalCount || 0,
                        showSizeChanger: false,
                        onChange: handleChangePage,
                    }}
                    className="mt-3"
                    countLabel={data?.data?.page?.totalCount}
                />
            </div>
        </div>);
}