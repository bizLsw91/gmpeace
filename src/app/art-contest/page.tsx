import {Button} from "antd";
import Image from "next/image";
import Link from "next/link";

export default function ArtContest() {
    return (
        <div className="art-contest">
            <div className="wrapper">
                <div className="art-contest-guide">
                    <div>
                        <div className="info">
                            <div className="info__big-title theme-color-3 flex flex-wrap-reverse justify-between">
                                <div className={'flex items-end'}>평화주간 학생 미술대회</div>
                                <Link href={'https://forms.gle/b749FxFkqQw4hCZ9A'} className={'pb-5'}>
                                    <Button type={'primary'} shape={'round'}>사전신청</Button>
                                </Link>
                            </div>
                            <div className="info__subtitle mb-5"><p>어린이들이 생각하는 일상의 평화,<br/>탄소중립을 그림으로 만나 봄</p></div>
                            <div className="info__data">
                                <div className="info__data-title theme-bg-color-3">일 시</div>
                                <div className="info__data-content">9월 7일(토) 10:00 ~ 16:00</div>
                            </div>
                            <div className="info__data">
                                <div className="info__data-title theme-bg-color-3">장 소</div>
                                <div className="info__data-content">안양천 광성초 건너편 햇무리광장</div>
                            </div>
                            <div className="info__data">
                                <div className="info__data-title theme-bg-color-3">주 제</div>
                                <div className="info__data-content">일상의 평화, 독립운동과 평화통일</div>
                            </div>
                            <div className="info__data">
                                <div className="info__data-title theme-bg-color-3">시상식</div>
                                <div className="info__data-content">
                                    <ul className={'awards__ul space-y-3'}>
                                        <li>9월 22일(토) 16:00 예정 ※ 변경시 별도 유선 안내 예정</li>
                                        <li>대상 4명, 최우수상 8명, 우수상 12명 등
                                            <br/>(특선 등은 참가자 규모에 따른 변경 운영)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="info__data">
                                <div className="info__data-title theme-bg-color-3">주최주관</div>
                                <div className="info__data-content">광명시</div>
                            </div>
                            <div className="info__data">
                                <div className="info__data-title theme-bg-color-3">후원</div>
                                <div className="info__data-content">광명시의회, 경기도광명교육지원청, 광명시 학원연합회, 한국예총 광명지회</div>
                            </div>
                        </div>
                    </div>
                    <div className="contest-poster w-full">
                        <Image
                            className={'w-full'}
                            src={'/images/contestNewPoster.png'}
                            alt={'contest-poster'}
                            width={1000}
                            height={1550}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
