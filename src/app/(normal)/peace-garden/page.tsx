import {Divider} from "antd";
import {Leaf, Sparkles} from "lucide-react";
import {Metadata} from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: '평화정원 피크닉 | 광명시평화주간',
    description: '평화정원 피크닉은 광명시 평화주간 행사 중 시민들이 참여할 수 있는 행사입니다. 평화정원 피크닉에 대한 상세 정보 페이지입니다.',
    alternates: {
        canonical: 'https://www.gmpeace.co.kr/peace-garden',
    }
};

const events = [
    {
        title: '신비한 탄소중립 실천체험',
        contents: [
            '내가 만든 에너지, 돌리자 발전자전거',
            '하늘에서 에너지가 쏟아지는 날',
            '쓰레기 젠가/빙하수호신',
            '폐플라스틱 업사이클 키링 만들기',
            'AI 홀로그램 만들기'
        ]
    },
    {
        title: '다양한 체험부스',
        contents: [
            '미니 꽃잎보자기 만들기',
            '양모 세탁볼과 모빌 만들기',
            '무한상상 메이커 3D펜 체험',
            '드론으로 즐기는 평화의 게임 드론 축구 체험'
        ]
    },
    {
        title: '광명시 평화정책 Zone',
        contents: [
            '평화를 향한 발자취'
        ]
    },
    {
        title: '탄소중립 체험',
        contents: [
            '친환경 발전기 체험',
            '재활용 소품 만들기',
            '친환경 소품 만들기'
        ]
    }
]

export default function PeaceGarden() {
    return (
        <div className={'peace-garden'}>
            <h1 className="hidden">평화정원 피크닉</h1>
            <h2 className="hidden">평화주간 평화정원 피크닉</h2>
            <div className="wrapper">
                <div className="peace-garden__mainImage mb-12">
                    <Image
                        className={'w-full'}
                        src={'/images/garden-map.png'}
                        alt={'garden-map'}
                        width={1000}
                        height={460}
                    />
                </div>
                <div className="picnic-zone-guide gap-6">
                    <div>
                        <div className="info">
                            <div className="info__data">
                                <div className="info__data-title theme-bg-color-3">일 시</div>
                                <div className="info__data-content">2024년 9월 21일(토)~22일(일)<br/>13:00~18:00</div>
                            </div>
                            <div className="info__data">
                                <div className="info__data-title theme-bg-color-3">장 소</div>
                                <div className="info__data-content">안양천 햇무리광장 아래<br/>(광성초 맞은편 안양천둔치)</div>
                            </div>
                            <div className="eco-banner">
                                <Image
                                    className="eco-banner__icon noParking"
                                    src={'/images/noParking2.png'}
                                    alt={'noParking'}
                                    width={100}
                                    height={100}
                                />
                                <div className="eco-banner__text">
                                    <p>안양천 피크닉장에는 별도의 주차공간이 없습니다.<br/>도보나 대중교통 이용으로 &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span>탄소발자국</span>을 줄여주세요.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="guide-map">
                            <Image
                                className="eco-banner__icon"
                                src={'/images/simple-map.png'}
                                alt={'simple-map'}
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
                <div className="info ">
                    <div className="info__big-title theme-color-3 flex"><Leaf/>평화정원 피크닉 상설행사</div>
                    <div className="wrap pl-6">
                        {
                            events.map((item, idx) => (
                                <div className="info__data-col permtEvent" key={idx}>
                                    <div className="info__title theme-color-8">{item.title}</div>
                                    <div className="info__subtitle">
                                        <ul>
                                            {item.contents.map((subitem, idx2) => (
                                                <li key={idx2}>{subitem}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="info">
                    <div className="info__big-title theme-color-2-1 flex"><Sparkles/> 평화정원 특별행사</div>
                    <div className="pl-6">
                        <div className="info__title theme-color-t">평화주간 심야영화제</div>
                        <div className="info__subtitle">자연에서 누리는 휴식과 힐링과 함께 하는 영화제</div>
                        <div className="wrap mt-[30px]">
                            <div className="movie-profile">
                                <Image
                                    src={'/images/모가디슈.png'}
                                    alt={'모가디슈'}
                                    width={300}
                                    height={670}
                                />
                                <div className={'movie-profile__info info__subtitle'}>9월 20일(금) 오후 7시: 상영영화 1</div>
                                {/*<div className={'movie-profile__age'}>15세 관람가, 라이센스 제공: 쇼박스</div>*/}
                            </div>
                            <div className="movie-profile">
                                <Image
                                    src={'/images/씽1.png'}
                                    alt={'씽1'}
                                    width={300}
                                    height={670}
                                />
                                <div className={'movie-profile__info info__subtitle'}>9월 21일(토) 오후 6시 30분 : 상영영화 2</div>
                                {/*<div className={'movie-profile__age'}>전체관람가, 라이센스 제공: 펍시네마</div>*/}
                            </div>

                        </div>
                        <Divider style={{borderColor: '#9d9d9d'}}/>
                        <div className="wrap">
                            <div className="special-event">
                                <div className={"info__title theme-color-7"}>
                                    특별 기획 공연 1
                                </div>
                                <div className={'flex flex-wrap'}>
                                    <div className={'event-info'}>
                                        <div className="info__subtitle color-7-1 mb-3 godo">&lt;세계뮤지션이 함께하는
                                            평화음악회&gt;</div>
                                        <div className="info__data">
                                            <div className="info__data-title-small badge-color-7-2">일 시</div>
                                            <div className="info__data-content">9월 21일(토) 13:00~14:15</div>
                                        </div>
                                        <div className="info__data">
                                            <div className="info__data-title-small badge-color-7-2">출연진</div>
                                            <div className="info__data-content-col">
                                                <ul className={'ul-circle'}>
                                                    <li>서아프리카 공연단 Tiamonyon</li>
                                                    <li>북에서 남으로 온 연주자 박성진</li>
                                                    <li>국악실내악단 고호</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <Image
                                        className={'img-1'}
                                        src={'/images/세계뮤지션.png'}
                                        alt={'세계뮤지션'}
                                        width={300}
                                        height={400}
                                    />
                                </div>
                            </div>
                            <div className="special-event">
                                <div className={"info__title theme-color-7"}>
                                    특별 기획 공연 2
                                </div>
                                <div className={'flex flex-wrap'}>
                                    <div className={'event-info'}>
                                        <div className="info__subtitle color-7-1 mb-3 godo">&lt;남한춤과 북한춤의 전통춤
                                            배틀한판&gt;</div>
                                        <div className="info__data">
                                            <div className="info__data-title-small badge-color-7-2">일 시</div>
                                            <div className="info__data-content">9월 22일(일) 14:30~15:30</div>
                                        </div>
                                        <div className="info__data">
                                            <div className="info__data-title-small badge-color-7-2">출연진</div>
                                            <div className="info__data-content-col">
                                                <ul className={'ul-circle'}>
                                                    <li>안은미 컴퍼니</li>
                                                    <li>남사당놀이 명인 문진수</li>
                                                    <li>축하공연: 광명시립농악단</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <Image
                                        className={'img-1'}
                                        src={'/images/남북한춤.png'}
                                        alt={'남북한춤'}
                                        width={300}
                                        height={400}
                                    />
                                </div>
                            </div>
                            <div className="special-event">
                                <div className={"info__title theme-color-3"}>
                                    평화비빔밥
                                </div>
                                <div className={'flex flex-wrap'}>
                                    <div className={'event-info'}>
                                        <div className="info__subtitle mb-3 godo">쌀(禾)을 고루 나누어(平) 먹는(口) 平和 비빔밥
                                            만들기
                                        </div>
                                        <div className="info__data">
                                            <div className="info__data-title-small badge-color-3-1">일 시</div>
                                            <div className="info__data-content">9월 21일(토) 12:00</div>
                                        </div>
                                    </div>
                                    <Image
                                        className={'img-1'}
                                        src={'/images/비빔밥.png'}
                                        alt={'비빔밥'}
                                        width={300}
                                        height={150}
                                    />
                                </div>
                            </div>
                            <div className="special-event">
                                <div className={"info__title theme-color-4"}>
                                    전시 프로그램
                                </div>
                                <div className={'flex flex-wrap'}>
                                    <div className={'event-info'}>
                                        <div className="info__subtitle mb-3 godo">독립운동가 사진전 및 평화주간 학생미술대회 수상작 전시</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
