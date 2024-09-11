"use client"
import {deleteNotice, INotice, useNotices} from "@/app/_clientApi/notice";
import DefaultTable from "@/components/shared/ui/default-table";
import {ISO8601DateTime} from "@/types/common";
import {MenuProps, Popconfirm} from "antd";
import {ColumnsType} from "antd/es/table";
import moment from "moment";
import Link from "next/link";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useCallback, useMemo, useState} from "react";

export default function Notice() {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname()

    const page = searchParams.get('page');
    const {data, error, isLoading} = useNotices({page: page ? Number(page) : 1});

    const handleChangePage = useCallback(
        (pageNumber: number) => {
            router.push(`${pathname}?${searchParams.toString()}`);
        },
        [router]
    );

    const onSelectChange = useCallback((newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    }, []);

    const modifyDropdownItems: MenuProps["items"] = useMemo(
        () => [
            {
                key: "statusUpdate",
                label: <a onClick={() => console.log(selectedRowKeys)}>상태수정</a>,
            },
        ],
        [selectedRowKeys]
    );

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    const onNoticeDelete = useCallback((id: number) => {
        console.log('delete');
    }, []);

    const columns: ColumnsType<INotice> = [
        {
            key: "action",
            width: 120,
            align: "center",
            render: (_value: unknown, record: INotice) => {
                return (
                    <span className="flex justify-center gap-2">
                    <Link href={`/admin/notice/edit/${record.id}`} className="px-2 py-1 text-sm btn">
                      수정
                    </Link>
                    <Popconfirm
                        title="해당 공지사항을 삭제하시겠습니까?"
                        onConfirm={() => onNoticeDelete(record.id)}
                        okText="예"
                        cancelText="아니오"
                    >
                      <a className="px-2 py-1 text-sm btn">삭제</a>
                    </Popconfirm>
                    </span>
                );
            },
        },
        {
            title: "제목",
            dataIndex: "title",
            width: 100,
        },
        {
            title: "생성일시",
            dataIndex: "created_at",
            align: "center",
            width: 120,
            render: (value: string) => {
                return (
                    <div className="text-sm">
                        <span className="block">{moment(value).format("YYYY/MM/DD")}</span>
                        <span className="block">{moment(value).format("hh:mm")}</span>
                    </div>
                );
            },
        },
        {
            title: "수정일시",
            dataIndex: "updatedAt",
            align: "center",
            width: 120,
            render: (value: ISO8601DateTime) => {
                return (
                    <div className="text-sm">
                        <span className="block">{moment(value).format("YYYY/MM/DD")}</span>
                        <span className="block">{moment(value).format("hh:mm")}</span>
                    </div>
                );
            },
        },
    ];


    return (
        <div className="notice pt-10">
            <div className="wrapper">
                <div className="flex justify-center font-bold text-2xl mb-14">공지사항</div>
                <DefaultTable<INotice>
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data?.data.items || []}
                    loading={isLoading}
                    pagination={{
                        current: Number(page || 1),
                        defaultPageSize: 5,
                        total: data?.data.page.totalCount || 0,
                        showSizeChanger: false,
                        onChange: handleChangePage,
                    }}
                    className="mt-3"
                    countLabel={data?.data.page.totalCount}
                />
            </div>
        </div>);
}
