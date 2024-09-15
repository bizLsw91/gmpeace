import {createClient} from "@/supabase/server";
import {NextAuthOptions, Session} from "next-auth";
import CredentialsProvider, {CredentialsConfig} from "next-auth/providers/credentials";
import * as bcrypt from 'bcrypt'

const credentialsProviderOption: CredentialsConfig<{}> = {
    type: "credentials",
    id: "gmpeace-credentials",
    name: "gmpeace-credentials",
    credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
    },
    async authorize(credentials: Record<string, unknown> | undefined) {

        const supabase = createClient();

        if (!credentials?.username || !credentials.password) {
            return null; // 이메일이나 비밀번호가 누락된 경우 인증 실패
        }

        // Supabase에서 사용자 검색
        const { data: user, error } = await supabase
            .from('USERS')
            .select('*') // id, email, 비밀번호만 가져옴
            .eq('user_name', credentials.username)
            .single();

        if (error || !user) {
            console.error('User not found or error occurred:', error);
            return null; // 사용자가 없거나 오류가 발생한 경우 인증 실패
        }

        // 입력한 비밀번호와 저장된 해시된 비밀번호를 비교
        const isPasswordValid = await bcrypt.compare(credentials.password as string, user.password);
        if (!isPasswordValid) {
            console.error('Invalid password');
            return null; // 비밀번호가 일치하지 않으면 인증 실패
        }

        // 인증에 성공하면 사용자 객체를 반환
        return user;
    },
};

export const nextAuthOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider(credentialsProviderOption)
    ],
    // callbacks: { ... },
    session: {
        strategy: 'jwt', // 세션을 JWT로 관리
        maxAge: 7 * 24 * 60 * 60,// 7일
    },
    jwt:{
        maxAge: 7 * 24 * 60 * 60,// 7일
    },
    // events: { ... },
    pages: {
        signIn: '/admin/login', // 로그인 페이지 경로
        verifyRequest: "/login?verify=1",
        error: "/admin/login",
    },
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.id = (user as Session["user"]).id;
                token.login = (user as Session["user"]).login;
            }
            return token;
        },
        session({ session, token }) {
            session.user = { ...session.user, id: token.id as string, login: token.login as string };
            return session;
        },
    }
};