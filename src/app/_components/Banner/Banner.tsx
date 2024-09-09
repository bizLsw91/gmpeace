"use client"
import Image from "next/image";
import {usePathname, useSearchParams} from "next/navigation";

export default function Banner() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    if(pathname==='/main')
        return (<></>);
    const contextNum = searchParams.get('context')
    let context = ''
    if (contextNum=='1') {
        context = '행사개요'
    }else if(contextNum=='2'){
        context = '공식행사&포럼'
    }else if(contextNum=='3'){
        context = '참여행사'
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
