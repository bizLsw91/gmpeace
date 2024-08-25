import Image from "next/image";
export default function Awards() {
    return (
        <div className="awards">
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
                            <div className="info__data-content">2024년 9월 22일(일) 16:00~18:00</div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title">장 소</div>
                            <div className="info__data-content">안양천 평화주간 특설무대</div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title">주 제</div>
                            <div className="info__data-content">독립운동과 평화통일</div>
                        </div>
                        <div className="info__data">
                            <div className="info__data-title">내 용</div>
                            <div className="info__data-content">대상 4명, 최우수상 8명, 우수상 12명 등 (문화상품권 10/5/3 차등 지급)<br/>오프닝
                                공연 / 축사 / 시상
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info__big-title">시상식 프로그램</div>
                        <table className="awards__program">
                            <thead>
                            <tr>
                                <th>시간</th>
                                <th>항목</th>
                                <th>내용</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>16:00~17:00</td>
                                <td>식전 공연</td>
                                <td>평화 특별공연 - 시계평화</td>
                            </tr>
                            <tr>
                                <td>17:00~17:03 (03&#039;)</td>
                                <td>개식 선언</td>
                                <td>사회자 인사 및 개식 안내</td>
                            </tr>
                            <tr>
                                <td>17:03~17:08 (05&#039;)</td>
                                <td>평화 주제영상</td>
                                <td>제3회 광명시 평화주간 주제 영상</td>
                            </tr>
                            <tr>
                                <td>17:08~17:18 (10&#039;)</td>
                                <td>오프닝 공연</td>
                                <td>광명시민합창단</td>
                            </tr>
                            <tr>
                                <td>17:18~17:21 (3&#039;)</td>
                                <td>공식의례</td>
                                <td>축사 및 폐회사</td>
                            </tr>
                            <tr>
                                <td>17:21~17:35 (14&#039;)</td>
                                <td>시상식</td>
                                <td>평화 공감 미술대회 시상식</td>
                            </tr>
                            <tr>
                                <td>17:35~</td>
                                <td>폐회</td>
                                <td>고지 및 환송</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="info">
                        <div className="info__big-title">식전 공연</div>
                        <div className="info__title theme-color-t">평화 특별공연 - 세계평화</div>
                        <div className="info__subtitle">세계뮤지션이 함께하는 평화음악회</div>
                        <div className="awards__performanceImage">
                            <Image
                                src={'/images/세계평화음악회.png'}
                                alt={'세계평화음악회'}
                                width={500}
                                height={200}
                            />
                        </div>
                    </div>
                    <div className="info">
                        <div className="info__big-title">오프닝 공연</div>
                        <div className="info__title theme-color-t">광명시민합창단</div>
                        <div className="awards__performanceImage">
                            <Image
                                className={'w-full'}
                                src={'/images/오케스트라.png'}
                                alt={'오케스트라'}
                                width={500}
                                height={200}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
