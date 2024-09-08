import ServerBuildingPage from "@/app/_components/ServerBuildingPage";
import {Button} from "antd";
import {Video} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const open = true

    return (
        <main className="home">
            <h1 className="hidden">평화주간</h1>
            <h2 className="hidden">광명시 평화주간</h2>
            {!open && <ServerBuildingPage/>}
            {open &&
                <div className="wrapper">
                    <div className="home__logo w-full flex justify-center mt-[50px] xs:mt-[70px] pt-4">
                        <Image
                            src={'/images/emblem.png'}
                            alt={'슬로건'}
                            width={400}
                            height={200}
                        />
                    </div>
                    <div className="home__signiture-logo w-full flex justify-center mt-[20px] xs:mt-[40px] pt-4">
                        <Image
                            src={'/images/signitureLogo.png'}
                            alt={'상징로고'}
                            width={600}
                            height={600}
                        />
                    </div>
                    <div className="home__sloganText w-full flex justify-center mb-14">
                        <Image
                            src={'/images/slogan.png'}
                            alt={'slogan'}
                            width={600}
                            height={80}
                        />
                    </div>
                    <div className="home__preRegiBtnArea flex flex-col items-center gap-5">
                        <Link href={'https://forms.gle/Aomv415weGSwVAW96'}>
                            <Button type={'primary'} shape={'round'} disabled>
                                <div>개막식 & 광명포럼<br/>사전신청</div>
                            </Button>
                        </Link>
                        <div className={'info__subtitle-bold text-center font-bold mb-5'}>
                            ※ 개막식 & 광명포럼 사전신청 오픈예정일:
                            <br/>
                            9월 12일 목요일
                        </div>
                    </div>
                    <div className="home__youtube flex flex-col justify-center mt-[20px] xs:mt-[30px]">
                        <div className="video-title flex justify-center info__title text-center ">
                        <Video className={'video-title-icon mr-2 self-center'}/> 3회 평화주간행사보기</div>
                        <div className="video-container flex justify-center">
                            <video width={1920} height={1080} autoPlay controls>
                                <source src="/videos/광명평화주간3회.mp4" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
            }
        </main>
    );
}
