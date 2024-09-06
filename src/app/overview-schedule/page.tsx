import {Divider} from "antd";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: '행사개요 | 광명시평화주간',
    description: '광명시 평화주간의 전반적인 행사 내용 요약. 행사개요, 행사일정 등을 보실 수 있습니다.',
};
export default function OverviewSchedule() {
    return (
        <div className="overview-schedule">
            <h1 className="hidden">행사개요</h1>
            <h2 className="hidden">평화주간 행사개요</h2>
            <h3 className="hidden">광명시 평화주간 행사개요</h3>
            <div className="wrapper">
                <div className="overview mb-14">
                    <h1 className="info__big-title">행사개요</h1>
                    <div className="info__data">
                        <div className="info__data-title">행 사 명</div>
                        <div className="info__data-content">제4회 광명시 평화주간</div>
                    </div>
                    <div className="info__data">
                        <div className="info__data-title">행사기간</div>
                        <div className="info__data-content">2024년 9월 20일(금)~9월 22일(일) / 3일간</div>
                    </div>
                    <div className="info__data">
                        <div className="info__data-title">행사장소</div>
                        <div className="info__data-content">① 광명극장(경기 광명시 철망산로 2), ② 안양천 햇무리광장</div>
                    </div>
                    <div className="info__data">
                        <div className="info__data-title">행사내용</div>
                        <div className="info__data-content-col">
                            <div className=""><span className={'theme-color-1'}>[공식행사]</span> 개막식, 시상식</div>
                            <div className=""><span className={'theme-color-2'}>[포럼]</span> 평화도시 광명포럼</div>
                            <div className=""><span className={'theme-color-3'}>[참여행사]</span> 평화주간 심야영화제, 평화정원 피크닉</div>
                        </div>
                    </div>
                </div>

                <div className="info__big-title">행사일정</div>
                <div className="colorInfo flex max-md:flex-col mb-3 md:gap-5">
                    <div className="flex">
                        <div className="colorbox theme-bg-color-1"></div>
                        <div className="colorexplnt ml-2">공식행사</div>
                    </div>
                    <div className="flex">
                        <div className="colorbox theme-bg-color-3"></div>
                        <div className="colorexplnt ml-2">시민 참여행사</div>
                    </div>
                    <div className="flex">
                        <div className="colorbox theme-bg-color-4"></div>
                        <div className="colorexplnt ml-2">전시회</div>
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
                        <td className={'time'}>12:00-13:00</td>
                        <td></td>
                        <td className={'green'}>평화비빔밥</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className={'time'}>13:00-14:00</td>
                        <td></td>
                        <td rowSpan={2} className={'green'}>세계 평화음악회</td>
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
                        <td className={'yellow'}>평화도시 광명포럼</td>
                    </tr>
                    <tr>
                        <td className={'time'}>16:00-17:00</td>
                        <td></td>
                        <td className={'yellow text-sm-responsive'}>학생미술대회 시상식</td>
                    </tr>
                    <tr>
                        <td className={'time'}>17:00-18:00</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className={'mergedTrH'}>
                        <td rowSpan={2} className={'time'}>18:00-19:00</td>
                        <td></td>
                        <td></td>
                        <td rowSpan={2}></td>
                    </tr>
                    <tr className={'mergedTrH'}>
                        <td rowSpan={3} className={'green'}>평화주간 심야영화제<br/>(모가디슈)</td>
                        <td rowSpan={3} className={'green'}>평화주간 심야영화제<br/>(씽1)</td>
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
                                    <div className={'footer-content theme-bg-color-4'}><p>독립운동가 사진전, 학생미술대회 수상작 전시
                                        [2024. 9.21~9.22 / 안양천]
                                    </p></div>
                                </div>
                                <div className={'flex justify-start'}>
                                    <div className={'footer-title'}>특별 행사:</div>
                                    <div className={'footer-content theme-bg-color-3'}><p>평화비빔밥(9.21.토 12:00~13:00)
                                    </p></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <div className="infos flex flex-col space-y-7">
                    <div className="info">
                        <div className="info__big-title">1일차</div>
                        <div className="info__title theme-color-1">제4회 광명시 평화주간 개막식 및 평화도시 포럼
                        </div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-1">일 시</div>
                            <div className="info__data-content">2024년 9월 20일(금) 14:00~16:00</div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-1">장 소</div>
                            <div className="info__data-content">광명극장 2층</div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-1">내 용</div>
                            <div className="info__data-content-col">
                                <div>식전공연</div>
                                <div>개막퍼포먼스</div>
                                <div>공식행사</div>
                                <div>평화도시 포럼</div>
                                <div>축하공연</div>
                            </div>
                        </div>
                        <Divider/>
                        <div className="info__title theme-color-3">평화주간 심야영화제</div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-3">일 시</div>
                            <div className="info__data-content">
                                2024년 9월 20일(금) 18:30~20:30
                            </div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-3">내 용</div>
                            <div className="info__data-content">상영영화 1</div>
                        </div>
                    </div>

                    <div className="info">
                        <div className="info__big-title">2일차</div>
                        <div className="info__title theme-color-3">평화정원 피크닉</div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-3">일 시</div>
                            <div className="info__data-content">
                                2024년 9월 21일(토) 12:00~18:00
                            </div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-3">장 소</div>
                            <div className="info__data-content">안양천 햇무리광장 아래 (광성초 맞은편 안양천둔치)</div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-3">내 용</div>
                            <div className="info__data-content-col">
                                <div>비빔밥 퍼포먼스</div>
                                <div>평화음악회</div>
                                <div>버스킹 공연</div>
                                <div>체험프로그램</div>
                                <div>푸드트럭</div>
                            </div>
                        </div>
                        <Divider/>
                        <div className="info__title theme-color-3">평화주간 심야영화제</div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-3">일 시</div>
                            <div className="info__data-content">
                                2024년 9월 21일(토) 18:30~20:30
                            </div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-3">내 용</div>
                            <div className="info__data-content">상영영화 2</div>
                        </div>
                    </div>

                    <div className="info">
                        <div className="info__big-title">3일차</div>
                        <div className="info__title theme-color-3">평화정원 피크닉</div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-3">일 시</div>
                            <div className="info__data-content">2024년 9월 22일(일) 13:00~18:00</div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-3">장 소</div>
                            <div className="info__data-content">안양천 햇무리광장 아래 (광성초 맞은편 안양천둔치)</div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title theme-bg-color-3">내 용</div>
                            <div className="info__data-content-col">
                                <div>남북한춤 공연</div>
                                <div>버스킹 공연</div>
                                <div>학생미술대회 시상식</div>
                                <div>체험프로그램</div>
                                <div>푸드트럭</div>
                            </div>
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
                            <div className="info__data-content"><p>2024년 9월 21일(토)~22일(일)<br/>평화정원 전시부스</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
