import {Metadata} from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: '시상식 | 광명시평화주간',
    description: '광명시 평화주간의 학생 미술대회 시상식에 대한 상세 정보 페이지입니다.',
    alternates: {
        canonical: 'https://www.gmpeace.co.kr/awards',
    }
};

export default function Awards() {
    return (
        <div className="awards">
            <h1 className="hidden">평화주간 시상식</h1>
            <div className="wrapper">
                <div className="infos flex flex-col space-y-7">
                    <div className="info">
                        <div className="info__big-title">평화주간 학생 미술대회 시상식</div>
                        <div className="awards__mainImage flex justify-center">
                            <Image
                                src={'/images/시상식.png'}
                                alt={'시상식'}
                                width={500}
                                height={280}
                            />
                        </div>
                    </div>
                    <div className="info">
                        <div className="info__big-title">행사개요</div>
                        <div className="info__data">
                            <div className="info__data-title">일 시</div>
                            <div className="info__data-content">2024년 9월 22일(일) 16:00</div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title">장 소</div>
                            <div className="info__data-content">안양천 평화주간 특설무대</div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title">주 제</div>
                            <div className="info__data-content">일상의 평화, 독립운동과 평화통일</div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title">내 용</div>
                            <div className="info__data-content">오프닝 공연, 학생미술대회 시상식</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info__big-title">오프닝 공연</div>
                        <div className="info__title theme-color-t">광명시립합창단</div>
                        <div className="awards__performanceImage">
                            {/*<Image*/}
                            {/*    className={'w-full'}*/}
                            {/*    src={'/images/오케스트라.png'}*/}
                            {/*    alt={'오케스트라'}*/}
                            {/*    width={500}*/}
                            {/*    height={200}*/}
                            {/*/>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
