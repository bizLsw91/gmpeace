import PopupModal from "@/app/_components/Modal/PopupModal";
import {isCurrentWithinKSTRange} from "@/lib/utils";
import {Button} from "antd";
import {Video} from "lucide-react";
import moment from "moment/moment";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const isNow = isCurrentWithinKSTRange('20240920 2344','20240921 0031')

    return (
        <main className="home">
            <h1 className="hidden">평화주간</h1>
            <h2 className="hidden">광명시 평화주간</h2>
            <PopupModal
                title="[공지] 평화정원 영화제(모가디슈) 취소 안내"
                content={
                    <>
                        안녕하세요, 평화정원 영화제에 관심을 가져주신 여러분께 감사드립니다.
                        <br/><br/>
                        오늘 오후 7시 상영예정이었던 모가디슈는 기상 악화로 인해 부득이하게 취소되었습니다. 양해 부탁드립니다.
                        <br/><br/>
                        불편을 드려 죄송합니다.
                        <br/><br/>
                        감사합니다.
                    </>
                }
            />
            <div className="wrapper">
                {isNow && <div className="home__logo w-full flex justify-center mt-[50px] xs:mt-[70px] pt-4">
                    <Image
                        src={'/images/emblem.png'}
                        alt={'광명시 평화주간 emblem'}
                        width={400}
                        height={200}
                    />
                </div>}

                <div className="home__signiture-logo w-full flex justify-center mt-[20px] xs:mt-[40px] pt-4">
                    <Image
                        src={'/images/signitureLogo.png'}
                        alt={'광명시 평화주간 상징로고'}
                        width={600}
                        height={600}
                    />
                </div>
                <div className="home__sloganText w-full flex justify-center mb-14">
                    <Image
                        src={'/images/slogan.png'}
                        alt={'광명시 평화주간 slogan'}
                        width={600}
                        height={80}
                    />
                </div>
                <div className="home__preRegiBtnArea flex flex-col items-center gap-5">
                    <Link href={'/pre-registration'}>
                        <Button type={'primary'} shape={'round'}>
                            <div>개막식 & 광명포럼<br/>사전신청 안내 및 접수</div>
                        </Button>
                    </Link>
                </div>
                <div className="home__preRegiBtnArea flex flex-col items-center gap-5">
                    <Link
                        href={'https://docs.google.com/forms/d/1q_k3q2SVnQzphBcG5vK57NkcsZvyYImRaTqk9OJaaME/viewform'}>
                        <Button type={'primary'} shape={'round'}>
                            <div>평화비빔밥 사전신청</div>
                        </Button>
                    </Link>
                </div>
                <div className="home__preRegiBtnArea flex flex-col items-center gap-5">
                    <Link
                        href={'/notice/1'}>
                        <Button type={'primary'} shape={'round'}>
                            <div>학생미술대회 수상자 확인</div>
                        </Button>
                    </Link>
                </div>
                <div className="home__youtube flex flex-col justify-center mt-[20px] xs:mt-[30px]">
                    <div className="video-title flex justify-center info__title text-center ">
                        <Video className={'video-title-icon mr-2 self-center'}/> 3회 평화주간행사보기
                    </div>
                    <div className="video-container flex justify-center">
                        <video width={1920} height={1080} autoPlay controls>
                            <source src="/videos/광명평화주간3회.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
        </main>
    );
}
