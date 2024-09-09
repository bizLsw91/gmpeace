import {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {label: "Username", type: "text", placeholder: 'admin0'},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                // 여기서 사용자 인증 로직을 수행합니다.
                if (credentials && credentials.username === "admin" && credentials.password === "boomcom2024") {
                    return {id: '1', name: 'Admin'}; // id를 문자열로 변환
                }
                return null;
            }
        })
    ],
    // callbacks: { ... },
    session: {
        strategy: 'jwt', // 세션을 JWT로 관리
    },
    // events: { ... },
    pages: {
        signIn: '/admin/login', // 로그인 페이지 경로
    },
};