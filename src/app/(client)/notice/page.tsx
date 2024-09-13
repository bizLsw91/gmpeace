"use client"
import {INotice, useNotices} from "@/app/_clientApi/notice";
import DefaultTable from "@/components/shared/ui/default-table";
import {ColumnsType} from "antd/es/table";
import moment from "moment";
import { useRouter, useSearchParams} from "next/navigation";

export default function Notice() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const page = searchParams.get('page');
    let page1 = page ? Number(page) : 1;
    const {data, isLoading} = useNotices({page: page1});

    const handleChangePage = (pageNumber: number) => {
        // 기존 searchParams를 가져와서 새로운 pageNumber로 설정
        // const params = new URLSearchParams(searchParams.toString());
        // params.set('page', String(pageNumber)); // 새로운 페이지 번호 설정

        // router.push를 사용해 변경된 URL로 이동
        router.push(`/notice?page=${pageNumber||1}`);
    }


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
            width: 150,
            // dataIndex: "user_id",
            render: () => {
                return (<span>운영사무국</span>)
            }
        },
        {
            title: "등록일",
            dataIndex: "created_at",
            align: "center",
            width: 100,
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
            dataIndex: "updated_at",
            align: "center",
            width: 100,
            render: (value) => {
                return (
                    <div className="text-sm flex flex-wrap gap-1.5">
                        <span className="block">{moment(value).format("YYYY/MM/DD")}</span>
                    </div>
                );
            },
        },
    ];

    const handleRowClick = (record: INotice) => {
        router.push(`/notice/${record.id}`);
    };

    return (
        <div className="notice pt-14 pb-24 min-h-[500px]">
            <div className="wrapper">
                <DefaultTable
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
                    onRow={(record) => {
                        return {
                            onClick: () => handleRowClick(record),
                        };
                    }}
                />
            </div>
        </div>);
}