import {createClient} from "@/supabase/server";
import {NextResponse} from "next/server";

export async function GET(request: Request, {params}: { params: { id: string } }) {
    const supabase = createClient();
    const noticeId = params.id;

    // 공지사항 상세 정보 및 작성자의 이름 가져오기
    const {data, error} = await supabase
        .from('NOTICES')
        .select(`
            *,
            author:USERS(name)
        `)
        .eq('id', noticeId) // 공지사항 ID로 필터링
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