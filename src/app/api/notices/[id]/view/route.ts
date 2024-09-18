import {createClient} from "@/supabase/server";
import moment from "moment/moment";
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'; // Next.js 쿠키 관리
import { appConfig } from "@/appConfig";

function convertToKST_date(timestamp:string) {
    return moment.utc(timestamp).add(9, 'hours').format('YYYY-MM-DD');
}
// Supabase notices 테이블의 view_count를 증가시키는 API 라우트
export async function POST(req: Request, { params }: { params: { id: string } }) {
    // IP 가져오는 유틸 함수
    const getIpAddress = (req: Request) => {
        return req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    };

    const { id } = params;
    console.log("id = ", id);

    if (!id) {
        return NextResponse.json({ message: 'Notice ID is required' }, { status: 400 });
    }

    // Supabase 클라이언트 생성
    const supabase = createClient();

    // 알림의 수정일과 view_count를 가져오기
    const { data: notice, error: noticeError } = await supabase
        .from(appConfig.db_table.notices)
        .select('updated_at, view_count')
        .eq('id', id)
        .single();

    if (noticeError || !notice) {
        return NextResponse.json({ message: 'Notice not found' }, { status: 404 });
    }

    // 한국 시간으로 날짜 변환
    let currentViewCount = notice.view_count || 0; // 현재 view_count 값

    // IP 및 쿠키 확인
    const ipAddress = getIpAddress(req);
    const noticeViewCookieName = `notice_view_${id}_${convertToKST_date(notice.updated_at)}`; // 쿠키 이름에 수정일을 포함
    console.log("noticeViewCookieName = ", noticeViewCookieName);

    // 기존 쿠키 확인
    const cookieStore = cookies();
    const existingCookie = cookieStore.get(noticeViewCookieName);

    // 기존에 조회한 기록이 있다면 중복 카운트 방지
    if (existingCookie && existingCookie.value === ipAddress) {
        return NextResponse.json({ message: 'Already viewed today', viewCountUpdated: false });
    }

    // view_count 수동으로 증가시키기
    currentViewCount += 1;

    // 업데이트 후 id, view_count, update 날짜만 반환
    const { data: updatedData, error } = await supabase
        .from(appConfig.db_table.notices)
        .update({ view_count: currentViewCount })
        .eq('id', id)
        .select('id, view_count, updated_at') // 필요한 필드만 반환
        .single(); // 단일 레코드만 반환

    if (error) {
        return NextResponse.json({ message: 'Failed to update view count', error }, { status: 500 });
    }

    // 쿠키 설정 (1일 동안 유지)
    const res = NextResponse.json({ message: 'View count updated', viewCountUpdated: true, data: updatedData });
    cookieStore.set(noticeViewCookieName, ipAddress, {
        maxAge: 60 * 60 * 24, // 1 day
        httpOnly: true,
        sameSite: 'strict',
    });

    return res;
}
