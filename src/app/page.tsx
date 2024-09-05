import ServerBuildingPage from "@/app/_components/ServerBuildingPage";
import {Button} from "antd";
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
                            src={'/images/slogun.png'}
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
                    <div className="home__slogunText w-full ">
                        <div className="flex flex-wrap justify-center sm:space-x-5">
                            <div>평화로운 광명생활!</div>
                            <div>평화, 광명이 잇다!</div>
                        </div>
                    </div>
                    <div className="home__preRegiBtnArea flex flex-wrap justify-center gap-5">
                        <Link href={'https://forms.gle/Aomv415weGSwVAW96'}>
                            <Button type={'primary'} shape={'round'}>
                                <div>개막식 & 광명포럼<br/>사전신청</div>
                            </Button>
                        </Link>
                        <Link href={'https://forms.gle/b749FxFkqQw4hCZ9A'}>
                            <Button type={'primary'} shape={'round'}>
                                <div>평화주간 학생미술대회<br/>사전신청</div>
                            </Button>
                        </Link>
                        <Link href={'files/2024년 평화주간 미술대회_단체신청서.hwp'}>
                            <Button type={'primary'} shape={'round'}>
                                <div>2024년 평화주간
                                    <br/>미술대회_단체신청서</div>
                            </Button>
                        </Link>

                    </div>
                    <div className="home__youtube flex justify-center mt-[20px] xs:mt-[30px]">
                        <div className="video-container flex justify-center">
                            <video width={1920} height={1080} controls>
                                <source src="/videos/광명평화주간3회.mp4" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
            }
        </main>
    );
}
