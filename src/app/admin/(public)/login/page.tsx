"use client"
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await signIn('Credentials', {
            redirect: false,
            username,
            password,
        });

        if (res?.ok) {
            router.push('/admin/history');
        } else {
            alert('로그인 실패');
        }
    };

    return (
        <div>
            <h1>로그인</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="아이디"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호"
                />
                <button type="submit">로그인</button>
            </form>
        </div>
    );
};

export default LoginPage;
