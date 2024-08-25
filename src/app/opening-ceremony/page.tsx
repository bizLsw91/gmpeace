import Image from "next/image";

export default function OpeningCeremony() {
    return (
        <div className="opening">
            <div className="wrapper">
                <div className="opening__mainImage flex justify-center">
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
                            <div className="info__data-content">2024년 9월 20일(금) 14:00~15:00</div>
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
                        <div className="info__big-title">개막식 프로그램</div>
                        <table className={'forum__program'} style={{width: '100%', borderCollapse: 'collapse'}}>
                            <thead>
                            <tr>
                                <th style={{
                                    backgroundColor: '#003366',
                                    color: 'white',
                                    padding: '10px',
                                    border: '1px solid #ddd'
                                }}>구분
                                </th>
                                <th style={{
                                    backgroundColor: '#003366',
                                    color: 'white',
                                    padding: '10px',
                                    border: '1px solid #ddd'
                                }}>항목
                                </th>
                                <th style={{
                                    backgroundColor: '#003366',
                                    color: 'white',
                                    padding: '10px',
                                    border: '1px solid #ddd'
                                }} className={'time'}>시간
                                </th>
                                <th style={{
                                    backgroundColor: '#003366',
                                    color: 'white',
                                    padding: '10px',
                                    border: '1px solid #ddd'
                                }}>내용
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td rowSpan={8} style={{
                                    border: '1px solid #ddd',
                                    padding: '10px',
                                    textAlign: 'center',
                                    verticalAlign: 'middle'
                                }}>개막식
                                </td>
                                <td style={{border: '1px solid #ddd', padding: '10px'}}>식전 공연</td>
                                <td style={{border: '1px solid #ddd', padding: '10px'}} className={'time'}>13:50~14:05
                                </td>
                                <td style={{border: '1px solid #ddd', padding: '10px'}}>오케스트라 공연</td>
                            </tr>
                            <tr>
                                <td style={{border: '1px solid #ddd', padding: '10px'}}>오프닝</td>
                                <td style={{border: '1px solid #ddd', padding: '10px'}} className={'time'}>14:05~14:08
                                </td>
                                <td style={{border: '1px solid #ddd', padding: '10px'}}>사회자 인사말</td>
                            </tr>
                            <tr>
                                <td style={{border: '1px solid #ddd', padding: '10px'}}>퍼포먼스 공연</td>
                                <td style={{border: '1px solid #ddd', padding: '10px'}} className={'time'}>14:08~14:15
                                </td>
                                <td style={{border: '1px solid #ddd', padding: '10px'}}>퍼포먼스 공연</td>
                            </tr>
                            <tr>
                                <td rowSpan={3} style={{border: '1px solid #ddd', padding: '10px'}}>공식의례 및 내빈소개</td>
                                <td rowSpan={3} style={{border: '1px solid #ddd', padding: '10px'}}
                                    className={'time'}>14:15~14:30
                                </td>
                                <td style={{border: '1px solid #ddd', padding: '10px'}}>
                                    공식 의례 및 내빈소개
                                </td>
                            </tr>
                            <tr>
                                <td style={{border: '1px solid #ddd', padding: '10px'}}>
                                    광명시장
                                </td>
                            </tr>
                            <tr>
                                <td style={{border: '1px solid #ddd', padding: '10px'}}>
                                    평화도시 내빈
                                </td>
                            </tr>
                            <tr>
                                <td style={{border: '1px solid #ddd', padding: '10px'}}>개막 세레모니</td>
                                <td style={{border: '1px solid #ddd', padding: '10px'}} className={'time'}>14:30~14:35
                                </td>
                                <td style={{border: '1px solid #ddd', padding: '10px'}}>터치버튼 세레모니</td>
                            </tr>
                            <tr>
                                <td style={{border: '1px solid #ddd', padding: '10px'}}>주제영상</td>
                                <td style={{border: '1px solid #ddd', padding: '10px'}} className={'time'}>14:35~14:40
                                </td>
                                <td style={{border: '1px solid #ddd', padding: '10px'}}>평화도시 광명 주제영상</td>
                            </tr>
                            <tr>
                                <td style={{
                                    border: '1px solid #ddd',
                                    padding: '10px',
                                    textAlign: 'center',
                                    verticalAlign: 'middle'
                                }}>휴식 시간
                                </td>
                                <td style={{border: '1px solid #ddd', padding: '10px'}}>브레이크타임</td>
                                <td style={{border: '1px solid #ddd', padding: '10px'}} className={'time'}>14:40~14:55
                                </td>
                                <td style={{border: '1px solid #ddd', padding: '10px'}}>평화연주(시민오케스트라 활용)</td>
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
                            width={500}
                            height={200}
                            className={'w-full'}
                        />
                    </div>
                    <div className="info">
                        <div className="info__big-title">오프닝 공연</div>
                        <div className="info__title theme-color-t">드로잉 퍼포먼스</div>
                        <div className="info__subtitle">탄소중립과 정원이 있는 평화 도시 광명</div>
                        <Image
                            src={'/images/드로잉.png'}
                            alt={'드로잉'}
                            width={500}
                            height={200}
                            className={'w-full'}
                        />
                    </div>
                    <div className="info flex space-x-10">
                        <div className="profile">
                            <div className="info__big-title">개회사</div>
                            <Image
                                src={'/images/박승원.png'}
                                alt={'오케스트라'}
                                width={400}
                                height={400}
                            />
                            <div className="profile__info">
                                <div className="name">박승원</div>
                                <div className="position">광명시장</div>
                            </div>
                        </div>
                        <div className="profile">
                            <div className="info__big-title">환영사</div>
                            <Image
                                src={'/images/안성환.png'}
                                alt={'오케스트라'}
                                width={400}
                                height={400}
                            />
                            <div className="profile__info">
                                <div className="name">안성환</div>
                                <div className="position">광명시의회 의장</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
