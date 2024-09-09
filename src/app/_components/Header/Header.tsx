"use client"

import {menuItems} from "@/menuItems";
import {Menu} from "lucide-react";
import Link from "next/link";
import {useEffect, useState} from "react";
import Image from "next/image";
import { Drawer, Menu as AntdMenu} from 'antd';
import { useRouter } from 'next/navigation';

export default function Header() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className={'header fixed top-0 z-10 w-full h-[50px] xs:h-[70px]'}>
            <div className={'wrapper h-full'}>
                <div className="header__area flex justify-between items-center h-full">
                    <div className={'header-logo w-[230px] xs:w-[300px]'}>
                        <Link href={'/main'}>
                            <Image
                                src={'/images/emblem.png'}
                                alt={'슬로건'}
                                width={100}
                                height={20}
                            />
                        </Link>
                    </div>
                    <div className={'hidden md:block md:ml-11 h-full'}>
                        <ul className={'flex gap-6 text-sm h-full'}>
                            {menuItems.map((item, idx) => (
                                <li key={idx} className={'h-full flex items-center'}>
                                    <Link href={item.to}>{item.label}</Link>
                                    {item.children && (
                                        <ul className={'sub-menu absolute bg-white shadow-md rounded-md p-2 mt-2'}>
                                            {item.children.map((subItem, subIdx) => (
                                                <li key={subIdx}>
                                                    <Link href={subItem.to}>{subItem.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={'md:hidden pt-[3px] mr-2'}>
                        <button onClick={showDrawer}><Menu/></button>
                    </div>
                    <Drawer onClose={onClose} open={open}>
                        <AntdMenu
                            mode={'inline'}
                            items={menuItems.map((item,idx) => ({
                                key: idx,
                                label: item.label,
                                children: item.children?.map(subItem => ({
                                    key: subItem.to,
                                    label: subItem.label,
                                }))
                            }))}
                            onSelect={function ({key}){
                                onClose()
                                router.push(key)
                            }}
                        />
                    </Drawer>
                </div>
            </div>
            <div className={'header__bottom'}/>
        </div>
    );
}
