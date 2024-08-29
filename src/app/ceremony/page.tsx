import SessionInfo from "@/app/_components/SessionInfo/SessionInfo";
import {Metadata} from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: '개막식및포럼 | 광명시평화주간',
    description: '광명시 평화주간의 공식행사인 개막식과 포럼에 대한 상세 정보 페이지입니다.',
};

const sessionData = {
    sessionTitle: '국제 정세',
    sessionSubtitle: '평화와 통일',
    sessionDescription: '평화와 통일의 국제 정세',
    speakers: [
        {
            name: '백준기',
            position:'교수',
            roles: ['한신대학교 교수','전) 통일부 통일교육원 원장','모스크바대학교 정치학 박사'],
            photo: '/images/백준기.png',  // 실제 사진 경로로 변경
        },
        {
            name: '다니엘 린데만',
            position:'',
            roles: ['《비정상회담》독일대표','본 대학교 동아시아학과','연세대학원 국제관계학 석사','연세대학원 한국학 전공 석사'],
            photo: '/images/다니엘.png',  // 실제 사진 경로로 변경
        },
    ],
    themeColor: '#008bd0',  // session1 컬러
};

export default function Ceremony() {
    return (
        <div className="ceremony">
            <h1 className="hidden">개막식 및 평화도시 광명포럼</h1>
            <div className="wrapper">
                <div className="ceremony__mainImage flex justify-center">
                    <Image
                        src={'/images/개막식.jpg'}
                        alt={'개막식'}
                        width={800}
                        height={600}
                    />
                </div>

                <div className="infos flex flex-col space-y-7">
                    <div className="info">
                        <div className="info__big-title">행사개요</div>
                        <div className="info__data">
                            <div className="info__data-title">일 시</div>
                            <div className="info__data-content">2024년 9월 20일(금) 14:00~16:00</div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title">장 소</div>
                            <div className="info__data-content">광명극장 2층</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info__big-title">개막식 및 포럼 프로그램</div>
                        <table className="ceremony__program">
                            <thead>
                            <tr>
                                <th>구분</th>
                                <th>항목</th>
                                <th>시간</th>
                                <th>내용</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td rowSpan={8}>개막식</td>
                                <td>식전 공연</td>
                                <td className={'time'}>13:50~14:05 (15’)</td>
                                <td>광명시민오케스트라</td>
                            </tr>
                            <tr>
                                <td>오프닝</td>
                                <td className={'time'}>14:05~14:08 (3’)</td>
                                <td>사회자 인사말</td>
                            </tr>
                            <tr>
                                <td>퍼포먼스 공연</td>
                                <td className={'time'}>14:08~14:15 (7’)</td>
                                <td>그림자 연극 퍼포먼스 공연</td>
                            </tr>
                            <tr>
                                <td rowSpan={3}>공식의례 및 내빈소개<br/>개회사, 축사</td>
                                <td rowSpan={3} className={'time'}>14:15~14:30 (15’)</td>
                                <td>공식의례 및 내빈소개</td>
                            </tr>
                            <tr>
                                <td>개회사</td>
                            </tr>
                            <tr>
                                <td>축사</td>
                            </tr>
                            <tr>
                                <td>개막 세레모니</td>
                                <td className={'time'}>14:30~14:35 (5’)</td>
                                <td>세레모니</td>
                            </tr>
                            <tr>
                                <td>주제영상 상영</td>
                                <td className={'time'}>14:35~14:38 (3’)</td>
                                <td>평화도시 광명 주제영상</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>브레이크타임</td>
                                <td className={'time'}>14:38~14:50 (12’)</td>
                                <td>광명시민 오케스트라 공연</td>
                            </tr>
                            <tr>
                                <td>개회</td>
                                <td>포럼 행사 안내</td>
                                <td className={'time'}>14:50~14:55 (5’)</td>
                                <td>포럼 소개 및 세션 참가자 소개</td>
                            </tr>
                            <tr>
                                <td>발표 및 토론</td>
                                <td>세션</td>
                                <td className={'time'}>14:55~15:35 (40’)</td>
                                <td>주제: 통일 한반도, 방향을 제시하다<br/>
                                    발제1: 10분 / 발제2: 10분 / 패널토론 20분
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>폐회</td>
                                <td>축하공연</td>
                                <td className={'time'}>15:35~15:55 (20’)</td>
                                <td>메인 축하공연</td>
                            </tr>
                            <tr>
                                <td>마무리</td>
                                <td className={'time'}>15:55~16:00 (5’)</td>
                                <td>이후 평화주간 행사 안내 및 공식행사 마무리</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="info">
                        <div className="info__big-title">식전공연</div>
                        <div className="info__title theme-color-t">광명시민 오케스트라</div>
                        <div className="info__subtitle">평화의 하모니로 평화주간을 열다</div>
                        <Image
                            src={'/images/오케스트라.png'}
                            alt={'오케스트라'}
                            width={1000}
                            height={520}
                            className={'w-full'}
                        />
                    </div>
                    <div className="info">
                        <div className="info__big-title">오프닝 공연</div>
                        <div className="info__title theme-color-t">쉐도우 아트 퍼포먼스</div>
                        <div className="info__subtitle">일상의 평화가 있는 평화도시 광명</div>
                        <Image
                            src={'/images/그림자.png'}
                            alt={'그림자'}
                            width={753}
                            height={421}
                            className={'w-full max-w-[750px]'}
                        />
                    </div>
                    <div className="info flex space-x-10">
                        <div className="profile">
                            <div className="info__big-title">개회사</div>
                            <Image
                                src={'/images/박승원.png'}
                                alt={'박승원'}
                                width={400}
                                height={400}
                            />
                            <div className="profile__info info__subtitle">
                                <div className="name">박승원</div>
                                <div className="position">광명시장</div>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info__big-title theme-color-session1">세션</div>
                        <div className="info__session">
                            <SessionInfo {...sessionData} />
                        </div>
                    </div>
                    <div className="info">
                        <div className="info__big-title">축하공연</div>
                        <div className="info__title theme-color-t">크로스오버그룹 ‘포레스텔라’</div>
                        <div className="info__subtitle">통일부-불후의명곡</div>
                        {/*<Image*/}
                        {/*    className={'w-full'}*/}
                        {/*    src={'/images/포레스텔라.png'}*/}
                        {/*    alt={'포레스텔라'}*/}
                        {/*    width={500}*/}
                        {/*    height={250}*/}
                        {/*/>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}
