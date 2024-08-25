import Image from "next/image";

export default function ArtContest() {
    return (
        <div className="art-contest">
            <div className="wrapper">
                <div className="art-contest-guide">
                    <div>
                        <div className="info">
                            <div className="info__big-title theme-color-3">평화주간 학생 미술대회</div>
                            <div className="info__subtitle mb-5"><p>어린이들이 생각하는 일상의 평화,<br/>탄소중립을 그림으로 만나 봄</p></div>
                            <div className="info__data">
                                <div className="info__data-title theme-bg-color-3">일 시</div>
                                <div className="info__data-content">9월 7일(토) 09:00 ~ 16:00</div>
                            </div>
                            <div className="info__data">
                                <div className="info__data-title theme-bg-color-3">장 소</div>
                                <div className="info__data-content">안양천 평화 학생미술대회 부스</div>
                            </div>
                            <div className="info__data">
                                <div className="info__data-title theme-bg-color-3">주 제</div>
                                <div className="info__data-content">독립운동과 평화통일</div>
                            </div>
                            <div className="info__data">
                                <div className="info__data-title theme-bg-color-3">시상식</div>
                                <div className="info__data-content">9월 22일(토) / 16:00~18:30<br/>안양천 햇무리광장 아래<br/>(광성초 맞은편 안양천둔치)</div>
                            </div>
                        </div>
                    </div>
                    <div className="contest-poster">
                        <Image
                            src={'/images/contest-poster.png'}
                            alt={'contest-poster'}
                            width={400}
                            height={600}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
