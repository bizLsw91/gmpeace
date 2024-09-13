"use client";

import {INotice, useNotices} from "@/app/_clientApi/notice";
import {useQuery} from "@tanstack/react-query";
import {Table, Pagination, TableColumnsType } from 'antd';
import axios from "axios";
import moment from "moment";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Spin } from 'antd';
import React from "react";

const NoticesList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isLoading, isError } = useNotices(currentPage);
    // const { data, isLoading, isError } = useQuery({
    //     queryKey:['notices'],
    //     queryFn: ()=>axios.get(`/api/notices?page=${currentPage||1}` )});;
    // const router = useRouter();
    //
    // if (isLoading) {
    //     return <Spin tip="Loading..." className="flex justify-center items-center min-h-screen" />;
    // }
    //
    // if (isError) {
    //     return <div className="text-red-500">Error loading notices.</div>;
    // }

    const columns:TableColumnsType<INotice> = [
        {
            title: "번호",
            dataIndex: "id",
            key:'id',
            width: 70,
            align: 'center',
        },
        {
            title: "제목",
            dataIndex: "title",
            key:'title',
            align: 'left',
        },
        {
            title: "작성자",
            width: 150,
            render: () => <span>운영사무국</span>,
            align: 'left',
        },
        {
            title: "등록일",
            dataIndex: "created_at",
            key: "created_at",
            align: "center",
            width: 100,
            render: (value: any) => (
                <div className="text-sm flex flex-wrap gap-1.5">
                    <span className="block">{moment(value).format("YYYY/MM/DD")}</span>
                </div>
            ),
        },
        {
            title: "수정일",
            dataIndex: "updated_at",
            key: "updated_at",
            align: "center",
            width: 100,
            render: (value: any) => (
                <div className="text-sm flex flex-wrap gap-1.5">
                    <span className="block">{moment(value).format("YYYY/MM/DD")}</span>
                </div>
            ),
        },
    ];

    // const handleRowClick = (record:INotice) => {
    //     router.push(`/notice-detail/${record.id}`);
    // };
    return (
        <div className="notice-list p-6 max-w-4xl mx-auto">
            {/*<Table*/}
            {/*    columns={columns}*/}
            {/*    dataSource={data?.data?.items || []}*/}
            {/*    pagination={false}*/}
            {/*    rowKey="id"*/}
            {/*    onRow={(record) => ({*/}
            {/*        onClick: () => handleRowClick(record),*/}
            {/*    })}*/}
            {/*    className="cursor-pointer transition-all hover:shadow-md hover:bg-gray-50"*/}
            {/*/>*/}
            {/*<div className="flex justify-end mt-4">*/}
            {/*    <Pagination*/}
            {/*        current={currentPage}*/}
            {/*        total={data?.data?.page?.totalCount || 0}*/}
            {/*        pageSize={5}*/}
            {/*        onChange={(page) => setCurrentPage(page)}*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    );
};

export default React.memo(NoticesList);