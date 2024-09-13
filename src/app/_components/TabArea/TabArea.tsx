"use client"
import {menuItems} from "@/menuItems";
import {Radio, RadioChangeEvent, ConfigProvider} from "antd";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import styled from "styled-components";

const StyledRadioGroup = styled(Radio.Group)`
    .ant-radio-button-wrapper {
        @media (max-width: 479px) {
            /* xs */
            font-size: 20px;
            font-weight: 700;
            padding: 5px 15px;
            height: 42px;
        }

        @media (min-width: 480px) and (max-width: 768px) {
            /* md */
            font-size: 23px;
            font-weight: 700;
            padding: 7px 15px;
            height: 47px;
        }

        @media (min-width: 769px) {
            /* lg and above */
            font-size: 26px;
            font-weight: 700;
            padding: 10px 15px;
            height: 52px;
        }
    }
`;

export default function TabArea() {
    const pathname = usePathname()
    let path = pathname;
    const [value, setValue] = useState(path);
    const router = useRouter();

    let options:any[]|undefined = []
    if(pathname==='/greeting' || pathname==='/overview-schedule'){
        options = menuItems[0]?.children?.map((item:any) => (
            { label: item.label, value: item.to }
        ))
    }else if(pathname==='/ceremony' || pathname==='/awards'){
        options = menuItems[1]?.children?.map((item:any) => (
            { label: item.label, value: item.to }
        ))
    }else if(pathname==='/peace-garden' || pathname==='/art-contest' || pathname==='/winner-check'){
        options = menuItems[2]?.children?.map((item:any) => (
            { label: item.label, value: item.to }
        ))
    }
    const onChange = ({ target: { value } }: RadioChangeEvent) => {
        console.log('tab onchange')
        router.push(value)
    };

    useEffect(() => {
        setValue(path)
    }, [path]);

    if(pathname==='' || pathname==='/' || pathname==='/pre-registration')
        return (<></>);

    return (
        <div className={'tabArea'}>
            <div className="wrapper">
                <div className={'pt-3 pb-12 md:pt-6 md:pb-28'}>
                    <ConfigProvider
                        theme={{
                            components: {
                                Radio: {
                                    buttonSolidCheckedBg: '#206edc',
                                    buttonCheckedBgDisabled: 'rgba(0, 0, 0, 0.15)',
                                    buttonColor: 'rgba(0, 0, 0, 0.25)'
                                },
                            },
                        }}
                    >
                        <StyledRadioGroup
                            options={options}
                            onChange={onChange}
                            defaultValue={path}
                            value={value}
                            optionType="button"
                            buttonStyle="solid"
                        />
                    </ConfigProvider>
                </div>
            </div>
        </div>
    );
}
