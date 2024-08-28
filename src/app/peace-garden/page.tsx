import ComingSoon from "@/app/peace-garden/ComingSoon";
import {Divider} from "antd";
import Image from "next/image";

const events = [
    {
        title: '평화 버스킹',
        contents: [
            '음악으로 누리는 일상의 평화로움'
        ]
    },
    {
        title: '다회용기 푸드트럭',
        contents: [
            '친환경도 챙기고 맛도 챙기는 식도락 여행'
        ]
    },
    {
        title: '평화 전시부스',
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

const spEvents = [
    {
        title: '특별 평화 공연',
        color: 'theme-color-3',
        content: '',
        time: '9월 21일(토) 13:00 평화음악회',
        time2: '9월 22일(일) 14:30 남북한춤 공연',
        imgUrl: '/images/남북한전통춤.png',
        alt: '남북한전통춤'
    },
    {
        title: '한솥밥 비빔 체험',
        color: 'theme-color-3',
        content: '쌀(禾)을 고루 나누어(平) 먹는(口) 平和 비빔밥 만들기',
        time: '9월 21일(토) 12:00',
        imgUrl: '/images/비빔밥.png',
        alt: '비빔밥'
    },
    {
        title: '평화 전시',
        color: 'theme-color-4',
        content: '과거부터 현재의 평화의 발자취',
        time: '9월 21일(토) ~ 22일(일) 13:00~19:00',
        imgUrl: '',
        alt: '평화 전시'
    },
]

export default function PeaceGarden() {
    return (
        <div className={'peace-garden'}>
            <h1 className="hidden">평화정원 피크닉</h1>
            <h2 className="hidden">평화주간 평화정원 피크닉</h2>
            <div className="wrapper">
                <div className="peace-garden__mainImage mb-12">
                    {/*<Image*/}
                    {/*    className={'w-full'}*/}
                    {/*    src={'/images/garden-map.png'}*/}
                    {/*    alt={'garden-map'}*/}
                    {/*    width={600}*/}
                    {/*    height={250}*/}
                    {/*/>*/}
                    <ComingSoon title={'평화정원 지도'}/>
                </div>
                <div className="picnic-zone-guide">
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
                        </div>
                        <div className="info">
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
                    <div className="guide-map">
                        <Image
                            className="eco-banner__icon"
                            src={'/images/guideMap.png'}
                            alt={'guideMap'}
                            width={400}
                            height={600}
                        />
                    </div>
                </div>
                <div className="info">
                    <div className="info__big-title theme-color-3">평화정원 상설행사</div>
                    <div className="wrap">
                        {
                            events.map((item, idx) => (
                                <div className="info__data-col permtEvent" key={idx}>
                                    <div className="info__title theme-color-3">{item.title}</div>
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
                    <div className="info__big-title theme-color-3">평화정원 특별행사</div>
                    <div className="info__title theme-color-3">평화주간 심야영화제</div>
                    <div className="info__subtitle">자연에서 누리는 휴식과 힐링과 함께 하는 영화제</div>
                    <div className="wrap mt-[30px]">
                        <div className="movie-profile">
                            {/*<Image*/}
                            {/*    src={'/images/탈주.png'}*/}
                            {/*    alt={'탈주'}*/}
                            {/*    width={300}*/}
                            {/*    height={670}*/}
                            {/*/>*/}
                            <ComingSoon width={300} height={420} minWidth={300} title={'상영영화 1'}/>
                            <div className={'movie-profile__info info__subtitle'}>9월 20일(금) 오후 6시 30분: 상영영화 1</div>
                            {/*<div className={'movie-profile__age'}>15세 관람가, 라이센스 제공: 쇼박스</div>*/}
                        </div>
                        <div className="movie-profile">
                            {/*<Image*/}
                            {/*    src={'/images/모가디슈.png'}*/}
                            {/*    alt={'모가디슈'}*/}
                            {/*    width={300}*/}
                            {/*    height={670}*/}
                            {/*/>*/}
                            <ComingSoon width={300} height={420} minWidth={300} title={'상영영화 2'}/>
                            <div className={'movie-profile__info info__subtitle'}>9월 21일(토) 오후 6시 30 : 상영영화 2</div>
                            {/*<div className={'movie-profile__age'}>전체관람가, 라이센스 제공: 펍시네마</div>*/}
                        </div>

                    </div>
                    <Divider style={{borderColor: '#9d9d9d'}}/>
                    <div className="wrap">
                        {
                            spEvents.map((event, idx3) => (
                                <div className="special-event" key={idx3}>
                                    <div className={"info__title " + event.color}>{event.title}</div>
                                    <div className="info__subtitle">{event.content}</div>
                                    <div className="info__subtitle-bold">{event.time}</div>
                                    {event.time2 && <div className="info__subtitle-bold">{event.time2}</div>}
                                    {event.imgUrl ?
                                        <Image
                                            className={'mt-4'}
                                            src={event.imgUrl}
                                            alt={event.alt}
                                            width={500}
                                            height={300}
                                        />
                                        :
                                        <ComingSoon width={500} height={300} title={'평화 전시 이미지'}/>
                                    }

                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}
