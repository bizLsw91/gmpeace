"use client"
import Image from "next/image";
import {usePathname} from "next/navigation";

export default function Banner() {
    const pathname = usePathname()
    let context = ''
    if(pathname==='' || pathname==='/')
        return (<></>);
    else if(pathname==='/greeting' || pathname==='/overview-schedule'){
        context = '평화주간 행사개요'
    }else if(pathname==='/ceremony' || pathname==='/awards'){
        context = '공식행사&포럼'
    }else if(pathname==='/peace-garden' || pathname==='/art-contest'){
        context = '참여행사'
    }else if(pathname==='/pre-registration'){
        context = '개막식 & 평화도시 광명포럼 사전신청 안내 및 접수'
    }else if(pathname==='/notice'){
        context = '알림 목록'
    }else if(pathname.startsWith('/notice/')){
        context = '알림 상세'
    }

    return (
        <div className={'banner mt-[50px] xs:mt-[70px]'}>
            <div className="wrapper">
                <div className="banner__content flex max-xs:flex-col justify-between">
                    <div className="banner__logo w-full flex max-xs:justify-center xs:justify-start">
                        <Image
                            src={'/images/emblem.png'}
                            alt={'평화주간 로고'}
                            width={400}
                            height={200}
                        />
                    </div>
                    <div className="banner__context w-full flex max-xs:justify-center xs:justify-end xs:items-end">
                        {context}
                    </div>
                </div>
            </div>
        </div>
    );
}
