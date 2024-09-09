"use client"

import { signIn } from 'next-auth/react';
import {useCallback, useState} from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import { Alert, Button, Form, Input } from "antd";
import { useForm } from "antd/lib/form/Form";

interface ILoginFormValue {
    username: string;
    password: string;
}

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [form] = useForm<ILoginFormValue>();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const params = useSearchParams();
    const query_error = params.get('error');

    const handleFinish = useCallback(async (value: ILoginFormValue) => {
        setIsLoading(true);

        try {
            console.log(value);
            await signIn("login-credentials", { username: value.username, password: value.password });
        } catch (error) {
            setIsLoading(false);
        }
    }, []);

    return (
        <div className={'login h-full'}>
            <div className={'flex bg-white items-center h-full'}>
                <div className="relative flex items-center justify-center w-full h-full">
                    <section className="w-full px-5 pb-10 text-gray-800 sm:w-4/6 md:w-3/6 lg:w-4/6 xl:w-3/6 sm:px-0">
                        <div className="flex flex-col items-center justify-center px-2 mt-8 sm:mt-0">
                            <h2 className="mt-2 text-5xl font-bold leading-tight inter">Admin System</h2>
                        </div>
                        <div className="w-full px-2 mt-12 sm:px-6">
                            {query_error && query_error !== "CredentialsSignin" ? (
                                <div className="mb-3">
                                    <Alert message={`로그인 중 오류가 발생했습니다. ${query_error}`} type="warning" />
                                </div>
                            ) : null}
                            <Form<ILoginFormValue>
                                form={form}
                                layout="vertical"
                                initialValues={{username: "admin", password: "admin"}}
                                onFinish={handleFinish}
                            >
                                <div className="mb-3">
                                    {query_error === "CredentialsSignin" ? (
                                        <>
                                            <Alert message="로그인을 실패했습니다. 아이디 또는 비밀번호를 다시 확인해주세요." type="error" />
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                <Form.Item name="username" rules={[{required: true, message: "아이디를 입력해주세요"}]}>
                                    <Input size="large" placeholder="아이디"/>
                                </Form.Item>

                                <Form.Item name="password" rules={[{required: true, message: "비밀번호를 입력해주세요"}]}>
                                    <Input placeholder="비밀번호" type="password" size="large"/>
                                </Form.Item>

                                <Button size="large" type="primary" htmlType="submit" className="w-full"
                                        loading={isLoading}>
                                    로그인
                                </Button>
                            </Form>
                        </div>
                    </section>
                </div>
            </div>
        </div>

);
};

export default LoginPage;
