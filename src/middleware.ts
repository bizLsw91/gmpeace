import {NextRequest, NextResponse} from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
    const token = await getToken({ req });
    const { pathname } = req.nextUrl;
    console.log("pathname = ", pathname);

    if (pathname == '/') {
        return NextResponse.redirect(new URL('/main', req.url));
    }
    if (pathname == '/admin') {
        return NextResponse.redirect(new URL('/admin/history', req.url));
    }

    // // 로그인 페이지는 미들웨어에서 예외 처리
    // if (pathname.startsWith('/admin/login')) {
    //     console.log('로그인 페이지는 미들웨어에서 예외 처리')
    //     return NextResponse.next();
    // }
    //
    // // 토큰이 없으면 로그인 페이지로 리다이렉트
    // if (!token && pathname.startsWith('/admin')) {
    //     console.log('토큰이 없으면 로그인 페이지로 리다이렉트')
    //     return NextResponse.redirect(new URL('/admin/login', req.url));
    // }

    return NextResponse.next();
}
