"use client"

import {useEffect, useState} from "react";
import Image from "next/image";

export default function Header() {
    const [stickyMenu, setStickyMenu] = useState(false);
    // sticky
    useEffect(() => {
        const stickyMenuBar = () => {
            if (window.scrollY > 80) {
                setStickyMenu(true)
            }
            else {
                setStickyMenu(false)
            }
        }
        window.addEventListener('scroll', stickyMenuBar);
    }, [])

    return (
        <div id={'header'} className={'flex items-center justify-between px-2 xs:px-4'}>
            <div className={'header-logo w-[230px] xs:w-[300px]'}>
                <Image
                    src={'/images/함께하는시민웃는광명.png'}
                    alt={'로고'}
                    width={300}
                    height={60}
                />
            </div>
            <div>cd</div>
        </div>
    );
}
