"use client"

import {adminMenu} from "@/adminMenu";
import {useAuth} from "@/lib/auth/auth-provider";
import {Menu, User} from "lucide-react";
import {signOut} from "next-auth/react";
import Link from "next/link";
import {useCallback, useEffect, useState} from "react";
import Image from "next/image";
import {Drawer, Dropdown, Menu as AntdMenu, MenuProps, Popover} from 'antd';
import {useRouter} from 'next/navigation';
import {BiLogOut} from "react-icons/bi";


export default function AdminHeader() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    let session;

    const auth = useAuth();
    if (auth) {
        session = auth.session;
    }

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const handleLogoutClick = useCallback(async () => {
        console.log('logout')
        await signOut({callbackUrl: "/admin/login"});
    }, []);

    const items: MenuProps['items'] = [
        // {
        //     key: '1',
        //     label: (
        //         <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        //             1st menu item
        //         </a>
        //     ),
        // },
        {
            key: '2',
            label: (
                <button onClick={handleLogoutClick}>
                    <div className={'flex'}>
                        <BiLogOut className={'self-center'}/>
                        &nbsp;
                        로그아웃
                    </div>
                </button>
            ),
        },
    ];


    return (
        <div className={'header fixed top-0 z-10 w-full h-[50px] xs:h-[70px]'}>
            <div className={'wrapper h-full'}>
                <div className="header__area flex justify-between items-center h-full">
                    <div className={'header-logo w-[230px] xs:w-[300px]'}>
                        <Link href={'/'}>
                            <Image
                                src={'/images/emblem.png'}
                                alt={'슬로건'}
                                width={100}
                                height={20}
                            />
                        </Link>
                    </div>
                    {session &&
                        <>

                            <div className={'hidden md:block md:ml-11 h-full'}>
                                <ul className={'flex gap-6 text-sm h-full'}>
                                    {adminMenu.map((item, idx) => (
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
                                    <li className={'self-center'}>
                                        <Dropdown menu={{items}} placement="topRight" arrow>
                                            <User/>
                                        </Dropdown>
                                    </li>
                                </ul>
                            </div>
                            <div className={'md:hidden pt-[3px] mr-2'}>
                                <button onClick={showDrawer}><Menu/></button>
                            </div>
                            <Drawer onClose={onClose} open={open}>
                                <button onClick={handleLogoutClick} className={'pl-[28px] mb-5'}>
                                    <div className={'flex'}>
                                        <BiLogOut className={'self-center'}/>
                                        &nbsp;
                                        로그아웃
                                    </div>
                                </button>

                                <AntdMenu
                                    mode={'inline'}
                                    items={adminMenu.map((item, idx) => ({
                                        key: idx,
                                        label: item.label,
                                        children: item.children?.map(subItem => ({
                                            key: subItem.to,
                                            label: subItem.label,
                                        }))
                                    }))}
                                    onSelect={function ({key}) {
                                        onClose()
                                        router.push(key)
                                    }}
                                />
                            </Drawer>
                        </>
                    }
                </div>
            </div>
            <div className={'header__bottom'}/>
        </div>
    );
}
