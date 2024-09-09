import {nextAuthOptions} from "@/app/api/auth/[...nextauth]/options";
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import {NextAuthOptions} from 'next-auth';

export const authOptions: NextAuthOptions = {
    providers: [

    ],
    session: {
        strategy: 'jwt', // 세션을 JWT로 관리
    },
    jwt: {
        secret: process.env.JWT_SECRET, // JWT 시크릿 키 설정
    },
    pages: {
        signIn: '/admin/login', // 로그인 페이지 경로
    },
};

const handler = NextAuth(nextAuthOptions);
export { handler as GET, handler as POST };
