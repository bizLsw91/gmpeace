import { useSession } from 'next-auth/react';

const AdminHistory = () => {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <p>로딩 중...</p>;
    }

    if (!session) {
        return <p>권한이 없습니다. 로그인 해주세요.</p>;
    }

    return (
        <div>
            <h1>관리자 히스토리 페이지</h1>
            <p>환영합니다, {session?.user?.name}님!</p>
        </div>
    );
};

export default AdminHistory;
