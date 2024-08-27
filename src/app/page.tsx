import ServerBuildingPage from "@/app/_components/ServerBuildingPage";
import {Button} from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const open = true

    return (
        <main className="home">
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
                            <h1>평화로운 광명생활!</h1>
                            <h1>평화, 광명이 잇다!</h1>
                        </div>
                    </div>
                    <div className="home__preRegiBtnArea flex flex-wrap justify-center gap-5">
                        <Link href={'https://forms.gle/Aomv415weGSwVAW96'}>
                            <Button type={'primary'} shape={'round'}><h1>개막식 & 광명포럼<br/>사전신청</h1></Button>
                        </Link>
                        <Link href={'https://forms.gle/b749FxFkqQw4hCZ9A'}>
                            <Button type={'primary'} shape={'round'}><h1>평화주간 학생미술대회<br/>사전신청</h1></Button>
                        </Link>

                    </div>
                    <div className="home__youtube flex justify-center mt-[20px] xs:mt-[30px]">
                        <div className="video-container flex justify-center">
                            <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/kR3wDMXTTw4?si=cXJl-r-l2WJCgB85"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            }
        </main>
    );
}
