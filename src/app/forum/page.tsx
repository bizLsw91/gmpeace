import SessionInfo from "@/app/_components/SessionInfo/SessionInfo";
import Image from "next/image";

const sessionData = {
    sessionTitle: '국제 정세',
    sessionSubtitle: '평화와 통일',
    sessionDescription: '평화와 통일의 국제 정세',
    speaker: {
        name: '오도영',
        position:'교수',
        role: '서울대학교 환경대학원',
        photo: '/images/오도영.png',  // 실제 사진 경로로 변경
    },
    chair: {
        name:'박승원',
        role:'광명시장'
    },
    panelists: [
        { name: '백준기', position:'교수', role: '한신대학교 교수' },
        { name: '다니엘 린데만', position:'', role: '<<비정상회담>> 독일대표' },
    ],
    themeColor: '#008bd0',  // session1 컬러
};
const sessionData2 = {
    sessionTitle: '독립 운동',
    sessionSubtitle: '이슈 한국사',
    sessionDescription: '이슈 한국사(독립 운동)',
    speaker: {
        name: '오도영',
        position:'교수',
        role: '서울대학교 환경대학원',
        photo: '/images/오도영.png',  // 실제 사진 경로로 변경
    },
    chair: {
        name:'박승원',
        role:'광명시장'
    },
    panelists: [
        { name: '박태균', position:'교수', role: '서울대학교 국제대학원 교수' },
        { name: '심용환', position:'소장', role: '역사N교육연구소 소장' },
    ],
    themeColor: '#598c30',  // session1 컬러
};

export default function Forum() {
    return (
        <div className="forum">
            <div className="wrapper">
                <div className="opening__mainImage flex justify-center">
                    <Image
                        src={'/images/개막식.jpg'}
                        alt={'로고'}
                        width={800}
                        height={600}
                    />
                </div>

                <div className="infos flex flex-col space-y-7">
                    <div className="info">
                        <div className="info__big-title">행사개요</div>
                        <div className="info__data">
                            <div className="info__data-title">일 시</div>
                            <div className="info__data-content">2024년 9월 20일(금) 15:00~17:00</div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title">장 소</div>
                            <div className="info__data-content">광명극장 2층</div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title">참 가</div>
                            <div className="info__data-content">광명시민, 내빈, 관계자 등.</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info__big-title">포럼 프로그램</div>
                        <table className="forum__program">
                            <thead>
                            <tr>
                                <th>구분</th>
                                <th className={'col2'}>항목</th>
                                <th>시간</th>
                                <th>내용</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>개회</td>
                                <td>행사 안내</td>
                                <td>14:55 ~ 15:00</td>
                                <td>포럼 소개 및 행사 안내</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>발표 및 토론</td>
                                <td>
                                    <div className={'session-badge'}>
                                        <div className={'theme-bg-color-session1'}>세션 1</div>
                                    </div>
                                </td>
                                <td>15:00 ~ 15:45</td>
                                <td><span className={'theme-color-session1 font-bold'}>&lt;통일 한반도, 방향을 제시하다&gt;</span>
                                    <br/> 발제: 25분 / 패널토론: 20분
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={'session-badge'}>
                                        <div className={'theme-bg-color-session2'}>세션 2</div>
                                    </div>
                                </td>
                                <td>15:45 ~ 16:30</td>
                                <td><span
                                    className={'theme-color-session2 font-bold'}>&lt;독립운동과 평화 &apos;기억과 소통을 말하다&apos;&gt;</span><br/>발제:
                                    25분 / 패널토론: 20분
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>폐회</td>
                                <td>축하공연</td>
                                <td>16:30 ~ 16:50</td>
                                <td>메인 축하공연</td>
                            </tr>
                            <tr>
                                <td>마무리</td>
                                <td>16:50 ~ 16:55</td>
                                <td>이후 평화주간 행사 안내 및 공식행사 마무리</td>
                            </tr>
                            </tbody>
                        </table>
                        <div className={'flex justify-end mt-2'}>
                            * 포럼 일정은 현장상황에 따라 변경될 수 있습니다.
                        </div>
                    </div>
                    <div className="info">
                        <div className="info__big-title theme-color-session1">세션 1</div>
                        <div className="info__session">
                            <SessionInfo {...sessionData} />
                        </div>
                    </div>
                    <div className="info">
                        <div className="info__big-title theme-color-session2">세션 2</div>
                        <div className="info__session">
                            <SessionInfo {...sessionData2} />
                        </div>
                    </div>
                    <div className="info">
                        <div className="info__big-title">축하공연 (약 3~5곡)</div>
                        <div className="info__title theme-color-t">크로스오버그룹‘포레스텔라’</div>
                        <div className="info__subtitle">통일부-불후의명곡‘ 평화가온다’ 편우승</div>
                        <Image
                            className={'w-full'}
                            src={'/images/포레스텔라.png'}
                            alt={'포레스텔라'}
                            width={500}
                            height={250}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
