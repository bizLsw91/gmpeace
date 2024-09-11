import {db} from "@/firebase/firebase.admin.config";
import { NextResponse } from 'next/server';

// Firestore 컬렉션 이름
const CATEGORY_COLLECTION = "categories";

// 카테고리 목록 가져오기
export async function GET() {
    try {
        const snapshot = await db.collection(CATEGORY_COLLECTION).get();
        const categories = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return NextResponse.json(categories);
    } catch (error) {
        return NextResponse.json({ error: '카테고리 목록을 가져오는 중 오류 발생' }, { status: 500 });
    }
}

// 카테고리 추가
export async function POST(req: Request) {
    try {
        const { name } = await req.json();
        const newCategoryRef = await db.collection(CATEGORY_COLLECTION).add({ name });
        return NextResponse.json({ id: newCategoryRef.id, name });
    } catch (error) {
        return NextResponse.json({ error: '카테고리 추가 중 오류 발생' }, { status: 500 });
    }
}

// 카테고리 수정
export async function PUT(req: Request) {
    try {
        const { id, name } = await req.json();
        const categoryRef = db.collection(CATEGORY_COLLECTION).doc(id);
        await categoryRef.update({ name });
        return NextResponse.json({ id, name });
    } catch (error) {
        return NextResponse.json({ error: '카테고리 수정 중 오류 발생' }, { status: 500 });
    }
}

// 카테고리 삭제
export async function DELETE(req: Request) {
    try {
        const { id } = await req.json();
        const categoryRef = db.collection(CATEGORY_COLLECTION).doc(id);
        await categoryRef.delete();
        return NextResponse.json({ message: '카테고리 삭제 완료' });
    } catch (error) {
        return NextResponse.json({ error: '카테고리 삭제 중 오류 발생' }, { status: 500 });
    }
}
