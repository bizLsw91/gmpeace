"use client"
import {useDeleteNotices, useNotices} from "@/app/(client)/api/queries/notice";
import DefaultTable from "@/components/shared/ui/default-table";
import {ISO8601DateTime} from "@/types/common";
import {INotice} from "@/types/notice";
import {MenuProps} from "antd";
import {ColumnsType} from "antd/es/table";
import moment from "moment";
import Link from "next/link";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useCallback, useMemo, useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import LoadingButton from '@mui/lab/LoadingButton';
import {Button} from "@mui/material";

export default function AdminNotice() {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname()


    const page = searchParams.get('page');
    const {data, error, isLoading} = useNotices(page ? Number(page) : 1);
    const {mutate: deleteNotices, isPending: isDeleting} = useDeleteNotices()

    const handleChangePage = useCallback(
        (pageNumber: number) => {
            // 기존 searchParams를 가져와서 새로운 pageNumber로 설정
            const params = new URLSearchParams(searchParams.toString());
            params.set('page', String(pageNumber)); // 새로운 페이지 번호 설정

            // router.push를 사용해 변경된 URL로 이동
            router.push(`${pathname}?${params.toString()}`);
            ;
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

    const onNoticeDelete = useCallback(() => {
        const stringKeys: number[] = selectedRowKeys.map(key => Number(key));
        console.log("stringKeys = ", stringKeys);
        deleteNotices(stringKeys)
    }, [selectedRowKeys]);

    const columns: ColumnsType<INotice> = [
        {
            key: "action",
            width: 80,
            align: "center",
            render: (_value: unknown, record: INotice) => {
                return (
                    <span className="flex justify-center gap-2">
                    <Link href={`/admin/notice/edit/${record.id}`} className="px-2 py-1 text-sm btn">
                      수정
                    </Link>
                    </span>
                );
            },
        },
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
            width: 150,
            dataIndex: "user_id",
            // render: (value: string)=>{
            //     return (<span>운영사무국</span>)
            // }
        },
        {
            title: "생성일시",
            dataIndex: "created_at",
            align: "center",
            width: 130,
            render: (value: string) => {
                return (
                    <div className="text-sm flex flex-wrap gap-1.5">
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
            width: 130,
            render: (value: ISO8601DateTime) => {
                return (
                    <div className="text-sm flex flex-wrap gap-1.5">
                        <span className="block">{moment(value).format("YYYY/MM/DD")}</span>
                        <span className="block">{moment(value).format("hh:mm")}</span>
                    </div>
                );
            },
        },
    ];


    return (
        <div className="admin-notice pt-10">
            <div className="wrapper">
                <div className="flex justify-center font-bold text-2xl mb-14">공지사항</div>
                <div className="flex justify-between">
                    <div>
                        {
                            hasSelected &&
                            <LoadingButton variant="outlined" color={"warning"} loading={isDeleting}
                                           startIcon={<DeleteIcon/>} onClick={onNoticeDelete}>
                                Delete {hasSelected ? selectedRowKeys.length : null}
                            </LoadingButton>
                        }
                    </div>
                    <Button variant={'outlined'}>
                        <Link href="/admin/notice/create">
                            작성하기
                        </Link>
                    </Button>
                </div>
                <DefaultTable<INotice>
                    rowSelection={rowSelection}
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
