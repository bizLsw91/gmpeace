import {NextAuthOptions, Session} from "next-auth";
import CredentialsProvider, {CredentialsConfig} from "next-auth/providers/credentials";

const credentialsProviderOption: CredentialsConfig<{}> = {
    type: "credentials",
    id: "login-credentials",
    name: "login-credentials",
    credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
    },
    async authorize(credentials: Record<string, unknown> | undefined) {
        if (credentials && credentials.username === "admin" && credentials.password === "admin") {
            return {
                id: "1",
                login: "admin",
                name: "관리자",
                email: "",
                image: "",
            };
        }

        return null;
    },
};

export const nextAuthOptions: NextAuthOptions = {
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