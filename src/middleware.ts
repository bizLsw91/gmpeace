import {NextRequest, NextResponse} from 'next/server';

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    console.log("pathname = ", pathname);

    if (pathname == '/') {
        return NextResponse.redirect(new URL('/main', req.url));
    }
    if (pathname == '/admin') {
        return NextResponse.redirect(new URL('/admin/notice', req.url));
    }

    return NextResponse.next();
}
