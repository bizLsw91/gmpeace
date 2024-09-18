import moment from "moment";
import { NextResponse } from 'next/server';
import { createClient } from '@/supabase/server';
import * as bcrypt from 'bcrypt'

// 예시 사용자 정보
const username = 'admin-gm';
const password = 'gmpeace2024!@#'; // 원본 비밀번호

// 비밀번호를 해시하고 데이터베이스에 저장
export async function POST(request: Request) {
    console.log('pw-request - ', moment().format('YYYY-MM-DD HH:mm:ss'));
    const supabase = createClient();

    try {
        // 비밀번호 해싱
        const saltRounds = 10; // 해싱 라운드 수 (값이 높을수록 보안에 좋지만 성능은 느려짐)
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // 데이터베이스에 사용자 정보 저장 (예: Supabase 사용 시)
        const { data, error } = await supabase
            .from('USERS')
            .update({ password: hashedPassword }) // 객체로 업데이트 데이터 전달
            .eq('user_name', username);

        if (error) {
            console.error('Failed to store user in DB:', error);
            return NextResponse.json({ message: 'Failed to update password', error }, { status: 500 });
        }

        console.log('User stored in DB:', data);
        return NextResponse.json({ message: 'Password updated successfully', data });

    } catch (err) {
        console.error('Error occurred while updating password:', err);
        return NextResponse.json({ message: 'Internal server error', error: err }, { status: 500 });
    }
}
