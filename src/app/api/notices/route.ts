import {createClient} from "@/supabase/server";
import {INoticeFormValue, INoticesResponse} from "@/types/notice";
import {getSession} from "next-auth/react";
import {NextRequest, NextResponse} from 'next/server';


// 알림 목록을 가져오는 API
export async function GET(request: Request) {
    const supabase = createClient();
    const {searchParams} = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = 5;

    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    try {
        // 알림 목록을 페이지네이션하여 가져옵니다.
        const {data, error, count} = await supabase
            .from('NOTICES')
            .select(`*,author:USERS(name)`, {count: 'exact'})
            .order('created_at', {ascending: false})
            .range(from, to);

        // users 필드를 제거하고 name을 author로 매핑
        const noticesWithAuthor = data?.map(notice => {
            return {
                ...notice,
                author: notice?.author?.name || 'Unknown', // users.name을 author로 매핑
            };
        });

        if (error) {
            return NextResponse.json({error: 'Failed to fetch notices'}, {status: 500});
        }

        const totalCount = count ?? 0
        const totalPage = Math.ceil(totalCount / pageSize);
        const response: INoticesResponse = {
            items: noticesWithAuthor,
            page: {
                currentPage: page,
                pageSize,
                totalPage,
                totalCount,
            },
        };

        return NextResponse.json(response);
    } catch (error) {
        console.error('Failed to fetch notices:', error);
        return NextResponse.json({error: 'An error occurred while fetching notices'}, {status: 500});
    }
}

// 알림을 생성하는 API
export async function POST(request: NextRequest) {
    const supabase = createClient();
    try {
        const body: INoticeFormValue = await request.json();
        console.log("createNotice row = ", body);
        const {data, error} = await supabase
            .from('NOTICES')
            .insert([
                body,
            ])
            .select('*')
            .single();


        if (error) {
            return NextResponse.json({error: 'Failed to create notice'}, {status: 500});
        }

        return NextResponse.json({...data});
    } catch (error) {
        console.error('Failed to create notice:', error);
        return NextResponse.json({error: 'An error occurred while creating notice'}, {status: 500});
    }
}

export async function DELETE(request: Request) {
    const supabase = createClient();
    try {
        const {ids} = await request.json(); // 요청 본문에서 ID 목록을 가져옴
        console.log("ids = ", ids);
        if (!ids || ids.length === 0) {
            return NextResponse.json({error: 'No IDs provided'}, {status: 400});
        }

        // Supabase에서 해당 ID의 알림을 삭제
        const {data, error} = await supabase
            .from('NOTICES')
            .delete()
            .in('id', ids); // 'in' 메서드를 사용하여 여러 ID를 삭제

        if (error) {
            return NextResponse.json({error: 'Failed to delete notices'}, {status: 500});
        }

        return NextResponse.json({message: 'Notices deleted successfully', data});
    } catch (error) {
        console.error('Failed to delete notices:', error);
        return NextResponse.json({error: 'An error occurred while deleting notices'}, {status: 500});
    }
}
