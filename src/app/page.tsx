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
                            <div>평화로운 광명생활!</div>
                            <div>평화, 광명이 잇다!</div>
                        </div>
                    </div>
                    <div className="home__preRegiBtnArea flex justify-center">
                        <Link href={'https://forms.gle/Aomv415weGSwVAW96'}>
                            <Button type={'primary'} shape={'round'}><p>개막식 & 광명포럼<br/>사전신청</p></Button>
                        </Link>

                    </div>
                </div>
            }
        </main>
    );
}
