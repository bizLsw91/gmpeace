"use client";

import {useNotices} from "@/app/(normal)/api/queries/notice";
import {INotice} from "@/types/notice";
import {Table, Pagination, TableColumnsType} from 'antd';
import moment from "moment";
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {Spin} from 'antd';
import React from "react";
import {useMediaQuery} from "react-responsive";

export default function NoticesList() {
    const [currentPage, setCurrentPage] = useState(1);
    const {data, isLoading, isError} = useNotices(currentPage);
    const router = useRouter();
    const isMobile = useMediaQuery({maxWidth: 639});

    if (isLoading) {
        return <Spin tip="Loading..." className="flex justify-center items-center min-h-screen"/>;
    }

    if (isError) {
        return <div className="text-red-500">Error loading notices.</div>;
    }

    let TableM = <></>
    let TableD = <></>

    if (isMobile) {
        const columns_mobile = [
            {
                dataIndex: 'id',
                key: 'id',
                render: (_: any, record: INotice) => (
                    <a onClick={() => handleRowClick(record)}>
                        <div>
                            <div className="m-title">{record.title}</div>
                            <div className="m-shortbox">작성자: 운영사무국</div>
                            <div className="m-shortbox">조회수: {record.view_count}</div>
                            <div className="m-shortbox">등록일: {moment(record.created_at).format('YYYY/MM/DD')}</div>
                            <div className="m-shortbox">수정일: {moment(record.updated_at).format('YYYY/MM/DD')}</div>
                        </div>
                    </a>
                )

            },
        ];
        TableM = <Table
            columns={columns_mobile}
            dataSource={data?.data?.items || []}
            pagination={false}
            rowKey="id"
            onRow={(record) => ({
                onClick: () => handleRowClick(record),
            })}
            className="notice-table-m cursor-pointer transition-all hover:shadow-md hover:bg-gray-50"
        />

    } else {
        const columns: TableColumnsType<INotice> = [
            {
                title: "번호",
                dataIndex: "id",
                key: 'id',
                width: 70,
                align: 'center',
            },
            {
                title: "제목",
                dataIndex: "title",
                key: 'title',
                align: 'left',
            },
            {
                title: "작성자",
                width: 110,
                render: () => <span>운영사무국</span>,
                align: 'left',
            },
            {
                title: "등록일",
                dataIndex: "created_at",
                key: "created_at",
                align: "center",
                width: 93,
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
                width: 93,
                render: (value: any) => (
                    <div className="text-sm flex flex-wrap gap-1.5">
                        <span className="block">{moment(value).format("YYYY/MM/DD")}</span>
                    </div>
                ),
            },
            {
                title: "조회수",
                dataIndex: "view_count",
                key: 'view_count',
                align: 'center',
            },
        ];
        TableD = <Table
            columns={columns}
            dataSource={data?.data?.items || []}
            pagination={false}
            rowKey="id"
            onRow={(record) => ({
                onClick: () => handleRowClick(record),
            })}
            className="notice-table cursor-pointer transition-all hover:shadow-md hover:bg-gray-50"
        />
    }

    const handleRowClick = (record: INotice) => {
        router.push(`/notice/${record.id}`);
    };

    return (
        <div className="notice-list pt-10 pb-20 max-w-4xl mx-auto">
            <div className="wrapper">
                {
                    isMobile ? TableM : TableD
                }
                <div className="flex justify-end mt-4">
                    <Pagination
                        current={currentPage}
                        total={data?.data?.page?.totalCount || 0}
                        pageSize={5}
                        onChange={(page) => setCurrentPage(page)}
                    />
                </div>
            </div>
        </div>
    );
}