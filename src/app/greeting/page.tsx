import TabArea from "@/app/_components/TabArea/TabArea";

export default function Greeting() {

    return (
        <div className={'greeting page-pb'}>
            <div className="wrapper">
                <div className="overview mb-14">
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

                <div className="greeting__title info__big-title">
                    시장님 인사말
                </div>
                <div className={'greeting__content'}>
                    <p>
                        제3회 광명시 평화주간 개회식을 함께하고 계신 존경하는 광명시민, 그리고, 내·외빈 여러분 반갑습니다.
                        광명시장 박승원입니다.
                        <br/>
                        <br/>
                        지난 1, 2회 평화주간 행사는 코로나 팬데믹으로 모두가 마스크를 써야하는 어려운 상황에서 개최되었지만, 평화의 의미를 시민 여러분께 성공적으로 전달하였다고 평가하고 있습니다.
                        다행히, 올해 평화주간 행사는 코로나로부터 벗어나 &apos;일상의 평화, 평화로운 광명생활&apos;이라는 슬로건으로 개최하게 되었습니다.
                        <br/>
                        <br/>
                        우리는 평소 평화라는 말을 자주 사용하고 합니다.
                        <br/>
                        <br/>
                        여러분은 평화를 위협하는 것은 무엇이라고 생각하십니까?
                        <br/>
                        <br/>
                        전쟁, 북한의 미사일, 기후위기로 인한 자연재난, 지구상에서의 모습 방콕, 공동체 또는 이웃과의 갈등, 빈곤, 불안 등 국가나 공동체 또는 개인이 처한 상황에 따라 다양할
                        것입니다.
                        <br/>
                        <br/>
                        이러한 위협들로부터 시민의 행복과 일상의 평화를 지키기 위해서 우리 광명시는 지방정부로서 역할을 수행하고자 합니다.
                        <br/>
                        <br/>
                        먼저, 광명시는 기후위기와 자연재난으로부터 도시 회복력을 갖추고 재난 없는 사회를 만들기 위해 기후에너지센터, 넷제로 에너지 카페, 1.5°C 기후행의, ESG교육 등을 통해
                        시민과 함께 안전한 탄소중립도시를 실현하는 것입니다.
                    </p>
                </div>
            </div>
        </div>
    );
}
