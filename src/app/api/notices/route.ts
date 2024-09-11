import {INoticesResponse} from "@/app/_clientApi/notice";
import {supabase} from "@/supabase/initSupabase";
import { NextResponse } from 'next/server';

// 공지사항 목록을 가져오는 API
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = 10;

    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    try {
        // 공지사항 목록을 페이지네이션하여 가져옵니다.
        const { data, error, count } = await supabase
            .from('NOTICES')
            .select('*', { count: 'exact' })
            .order('created_at', { ascending: false })
            .range(from, to);

        if (error) {
            return NextResponse.json({ error: 'Failed to fetch notices' }, { status: 500 });
        }

        const totalCount = count ?? 0
        const totalPage = Math.ceil(totalCount / pageSize);
        const response: INoticesResponse = {
            data: {
                items: data,
                page: {
                    currentPage: page,
                    pageSize,
                    totalPage,
                    totalCount,
                },
            },
        };

        return NextResponse.json(response);
    } catch (error) {
        console.error('Failed to fetch notices:', error);
        return NextResponse.json({ error: 'An error occurred while fetching notices' }, { status: 500 });
    }
}

// 공지사항을 생성하는 API
export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("notice body = ", body);
        const { title, content } = body;

        const { data, error } = await supabase
            .from('NOTICES')
            .insert([{ title, content }]);

        if (error) {
            return NextResponse.json({ error: 'Failed to create notice' }, { status: 500 });
        }

        return NextResponse.json({ data });
    } catch (error) {
        console.error('Failed to create notice:', error);
        return NextResponse.json({ error: 'An error occurred while creating notice' }, { status: 500 });
    }
}
