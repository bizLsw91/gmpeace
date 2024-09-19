import {appConfig} from "@/appConfig";
import {createClient} from "@/supabase/server";
import {INoticeFormValue, INoticeUpdateFormValue} from "@/types/notice";
import {NextRequest, NextResponse} from "next/server";

export async function GET(request: Request, {params}: { params: { id: string } }) {
    const supabase = createClient();
    const noticeId = params.id;

    // 알림 상세 정보 및 작성자의 이름 가져오기
    const {data, error} = await supabase
        .from(appConfig.db_table.notices)
        .select(`
            *,
            author:USERS(name)
        `)
        .eq('id', noticeId) // 알림 ID로 필터링
        .single(); // 단일 레코드 가져오기

    if (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

    // 데이터 가공: users.name을 author로 변환하고 users 필드 삭제
    const noticeWithAuthor = {
        ...data,
        author: data?.author?.name || 'Unknown', // 작성자 정보가 없을 경우 'Unknown' 처리
    };

    return NextResponse.json(noticeWithAuthor, {status: 200});
}

export async function PUT(request: NextRequest, {params}: { params: { id: string } }) {
    const supabase = createClient();
    const noticeId = params.id;
    try {
        const body: INoticeUpdateFormValue = await request.json();
        const req = {
            ...body,
            updated_at: new Date().toISOString(),
        }
        console.log("updateNotice row = ", body);
        const {data, error} = await supabase
            .from(appConfig.db_table.notices)
            .update(req)
            .eq('id', noticeId)
            .select('*')
            .single();


        if (error) {
            return NextResponse.json({error: 'Failed to update notice'}, {status: 500});
        }

        return NextResponse.json({...data});
    } catch (error) {
        console.error('Failed to update notice:', error);
        return NextResponse.json({error: 'An error occurred while updating notice'}, {status: 500});
    }
}