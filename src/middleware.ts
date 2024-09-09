import {NextRequest, NextResponse} from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
    const token = await getToken({ req });
    const { pathname } = req.nextUrl;

    if (pathname == '/') {
        return NextResponse.redirect(new URL('/main', req.url));
    }

    // 로그인 페이지는 미들웨어에서 예외 처리
    if (pathname.startsWith('/admin/login')) {
        return NextResponse.next();
    }

    // 토큰이 없으면 로그인 페이지로 리다이렉트
    if (!token && pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/admin/login', req.url));
    }

    return NextResponse.next();
}
