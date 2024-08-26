import {Divider} from "antd";

export default function OverviewSchedule() {
    return (
        <div className="overview-schedule">
            <div className="wrapper">
                <div className="colorInfo flex max-md:flex-col mb-3 md:gap-5">
                    <div className="flex">
                        <div className="colorbox theme-bg-color-1"></div>
                        <div className="colorexplnt ml-2">공식행사</div>
                    </div>
                    <div className="flex">
                        <div className="colorbox theme-bg-color-2"></div>
                        <div className="colorexplnt ml-2">광명포럼</div>
                    </div>
                    <div className="flex">
                        <div className="colorbox theme-bg-color-3"></div>
                        <div className="colorexplnt ml-2">시민 참여행사</div>
                    </div>
                    <div className="flex">
                        <div className="colorbox theme-bg-color-4"></div>
                        <div className="colorexplnt ml-2">전시회</div>
                    </div>
                    <div className="flex">
                        <div className="colorbox theme-bg-color-6"></div>
                        <div className="colorexplnt ml-2">연계행사</div>
                    </div>
                </div>
                <table className="overview-schedule__program mb-14">
                    <thead>
                    <tr>
                        <th>구분</th>
                        <th>1일차 - 9.20. (금)</th>
                        <th>2일차 - 9.21. (토)</th>
                        <th>3일차 - 9.22. (일)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>12:00-13:00</td>
                        <td></td>
                        <td className={'green'}>한솔밥 비비기</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>13:00-14:00</td>
                        <td></td>
                        <td rowSpan={2} className={'green'}>평화음악회</td>
                        <td rowSpan={2} className={'green'}>평화정원 피크닉</td>
                    </tr>
                    <tr className={'mergedTrH'}>
                        <td rowSpan={2} className={'time'}>14:00-15:00</td>
                        <td rowSpan={2} className={'yellow'}>개막식</td>
                    </tr>
                    <tr>
                        <td rowSpan={4} className={'green'}>평화정원 피크닉</td>
                        <td rowSpan={2} className={'green'}>남북한춤 공연</td>
                    </tr>
                    <tr>
                        <td className={'time'}>15:00-16:00</td>
                        <td className={'blue'}>평화도시 광명포럼</td>
                    </tr>
                    <tr>
                        <td className={'time'}>16:00-17:00</td>
                        <td></td>
                        <td className={'yellow'}>시상식</td>
                    </tr>
                    <tr>
                        <td className={'time'}>17:00-18:00</td>
                        <td></td>
                        <td className={'green'}>평화정원 피크닉</td>
                    </tr>
                    <tr className={'mergedTrH'}>
                        <td rowSpan={2} className={'time'}>18:00-19:00</td>
                        <td></td>
                        <td></td>
                        <td rowSpan={2}></td>
                    </tr>
                    <tr className={'mergedTrH'}>
                        <td rowSpan={3} className={'green'}>평화주간 심야영화제</td>
                        <td rowSpan={3} className={'green'}>평화주간 심야영화제</td>
                    </tr>
                    <tr>
                        <td className={'time'}>19:00-20:00</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={'time'}>20:00-21:00</td>
                        <td></td>
                    </tr>

                    <tr className="schedule-grid__footer">
                        <td colSpan={4}>
                            <div className={'flex flex-col text-left'}>
                                <div className={'flex justify-start'}>
                                    <div className={'footer-title'}>사전 행사:</div>
                                    <div>
                                        <p className={'footer-content theme-bg-color-3'}>평화주간 학생미술대회 [2024.9.7. /
                                            안양천]</p>
                                    </div>
                                </div>
                                <div className={'flex justify-start'}>
                                    <div className={'footer-title'}>전시 행사:</div>
                                    <div className={'footer-content theme-bg-color-4'}><p>북한미술 전시관, 학생미술대회 수상작 전시관,
                                        독립운동 전시회 [2024.9.21~9.22 /
                                        안양천]
                                    </p></div>
                                </div>
                                <div className={'flex justify-start'}>
                                    <div className={'footer-title'}>연계 행사:</div>
                                    <div className={'footer-content theme-bg-color-6'}>(문화재단) 김대중 탄생 100주년 기념 콘서트, (디딤
                                        청소년활동센터) 2024년 보훈
                                        테마활동 청소년독립역사 계승연속 독립역사 ‘잇다’ 프로젝트
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <div className="infos flex flex-col space-y-7">
                    <div className="info">
                        <div className="info__big-title">1일차</div>
                        <div className="info__title theme-color-1">제4회 광명시 평화주간 개막식</div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-1">일 시</div>
                            <div className="info__data-content">2024년 9월 20일(금) 14:00~15:00</div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-1">장 소</div>
                            <div className="info__data-content">광명극장 2층</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info__big-title">1일차</div>
                        <div className="info__title theme-color-2">평화도시 광명포럼</div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-2">일 시</div>
                            <div className="info__data-content">2024년 9월 20일(금) 15:00~17:00</div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-2">장 소</div>
                            <div className="info__data-content">광명극장 2층</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info__big-title">1~2일차</div>
                        <div className="info__title theme-color-3">평화주간 심야영화제</div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-3">일 시</div>
                            <div className="info__data-content-col">
                                <div className="flex flex-col">
                                    <div className=""><p>2024년 9월 20일(금) 18:30~21:00<br/><span
                                        className={'theme-color-3'}>상영영화1</span></p></div>
                                    <div className=""><p>2024년 9월 21일(토) 18:30~21:00<br/><span
                                        className={'theme-color-3'}>상영영화2</span></p></div>
                                </div>
                            </div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-3">장 소</div>
                            <div className="info__data-content">안양천</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info__big-title">2~3일차</div>
                        <div className="info__title theme-color-3">평화정원 피크닉</div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-3">일 시</div>
                            <div className="info__data-content-col">
                                <div className="flex flex-col">
                                    <div className=""><p>2024년 9월 21일(토) 13:00~18:00</p></div>
                                    <div className=""><p>2024년 9월 22일(일) 13:00~18:00</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-3">장 소</div>
                            <div className="info__data-content">안양천</div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-3">내 용</div>
                            <div className="info__data-content-col theme-color-3">
                                <div>레크리에이션</div>
                                <div>라이브 페인팅</div>
                                <div>청소년버스킹</div>
                                <div>특별평화공연-평화춤배틀</div>
                                <div>특별평화공연-평화세계음악회</div>
                                <div>자전거 발전기 팝콘 게임</div>
                                <div>재활용 소품 만들기</div>
                                <div>친환경 소품 만들기</div>
                                <div>푸드트럭</div>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info__big-title">3일차</div>
                        <div className="info__title theme-color-3">평화주간 학생 미술대회 시상식</div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-3">일 시</div>
                            <div className="info__data-content">2024년 9월 22일(일) 16:00~17:00</div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-3">장 소</div>
                            <div className="info__data-content">안양천 햇무리광장</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info__big-title">사전행사</div>
                        <div className="info__title theme-color-4">평화주간 학생 미술대회</div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-4">일 시</div>
                            <div className="info__data-content">2024년 9월 7일(토) 10:00~16:00</div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-4">장 소</div>
                            <div className="info__data-content">안양천 햇무리광장</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info__big-title">전시행사</div>
                        {/*<div className="info__title theme-color-4">평화주간 학생 미술대회 수상작 전시</div>*/}
                        {/*<div className="info__data">*/}
                        {/*    <div className="info__data-title theme-bg-color-4">일 시</div>*/}
                        {/*    <div className="info__data-content">2024년 9월 9일(토)~미정</div>*/}
                        {/*</div>*/}
                        {/*<div className="info__data">*/}
                        {/*    <div className="info__data-title theme-bg-color-4">장 소</div>*/}
                        {/*    <div className="info__data-content">평생학습원 1층 전시실</div>*/}
                        {/*</div>*/}
                        {/*<Divider style={{borderColor: '#9d9d9d'}}></Divider>*/}
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-5">특별전시</div>
                            <div className="info__data-content"><p>2024년 9월 21일(토)~22일(일)<br/>평화정원 피크닉 전시부스</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
