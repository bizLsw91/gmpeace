import Spinner from "@/components/shared/spinner";
import dynamic from 'next/dynamic';
export const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false, // 서버 사이드 렌더링 비활성화
    loading: () => <Spinner/> // 로딩 중 표시할 컴포넌트
});