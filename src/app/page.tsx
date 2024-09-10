import {Button} from "antd";
import {Video} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="home">
            <h1 className="hidden">평화주간</h1>
            <h2 className="hidden">광명시 평화주간</h2>
            <div className="wrapper">
                <div className="home__logo w-full flex justify-center mt-[50px] xs:mt-[70px] pt-4">
                    <Image
                        src={'/images/emblem.png'}
                        alt={'광명시 평화주간 emblem'}
                        width={400}
                        height={200}
                    />
                </div>
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
                    <div className={'info__subtitle-bold text-center font-bold mb-5'}>
                        ※ 일 시: 9월 13일 금요일 9:00 ~ 16:00
                    </div>
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
