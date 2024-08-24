import Image from "next/image";

export default function Footer() {
    return (
        <div className={'footer py-4'}>
            <div className="wrapper">
                <div className="flex flex-wrap items-center">
                    <div className={'footer__logo'}>
                        <Image
                            src={'/images/slogun.png'}
                            alt={'로고'}
                            width={300}
                            height={200}
                        />
                    </div>
                    <div className="flex flex-wrap items-center">
                        <div className={'footer__info'}>
                            <p>제4회 광명시평화공감행사 운영사무국</p>
                            <p>사업자등록번호: 138-81-82136</p>
                            <p>서울특별시 송파구 동남로 13길 42, 붐컴빌딩</p>
                        </div>
                        <div className={'footer__info'}>
                            <p>운영국 E-mail: boomcom2013@naver.com</p>
                            <p>접수 및 상담전화: 02-502-5953</p>
                            <p>Copyrights ⓒ 제4회 광명시평화공감행사 All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
