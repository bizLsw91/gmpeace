import {Button} from "antd";
import {Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: '사전신청 | 광명시평화주간',
    description: '광명시 평화주간의 사전신청 안내 및 접수를 할 수 있는 페이지입니다.',
    alternates: {
        canonical: 'https://www.gmpeace.co.kr/pre-registration',
    }
};
export default function PreRegistration() {
    // 현재 서버 시간을 가져옵니다.
    const currentTime = new Date();

    // 첫 번째 시간 범위: 9월 13일 9:00 ~ 14:00
    const startTime1 = new Date('2024-09-13T09:00:00');
    const endTime1 = new Date('2024-09-13T14:00:00');

    // 두 번째 시간 범위: 9월 13일 14:00 ~ 16:00
    const startTime2 = new Date('2024-09-13T14:00:00');
    const endTime2 = new Date('2024-09-13T16:00:00');

    // 첫 번째 버튼 활성화 여부
    const isCitizenActive = currentTime >= startTime1 && currentTime < endTime1;

    // 두 번째 버튼 활성화 여부
    const isNonCitizenActive = currentTime >= startTime2 && currentTime < endTime2;

    return (
        <div className="pre-registration">
            <h1 className="hidden">개막식 & 평화도시 광명포럼 사전신청</h1>
            <div className="wrapper">
                <div className="infos flex flex-col space-y-7 mt-14">
                    <div className="info">
                        <h1 className="info__big-title">주요 특징</h1>
                        <div className="info__title theme-color-t">
                            ※사전 신청자 중 <span className={'font-bold'}>추첨에 의해 좌석배정합니다.</span><br/>
                            (광명시민 80%, 타지역 20%)
                        </div>
                    </div>
                    <div className="info">
                        <h1 className="info__big-title">지역별 안내 및 사전신청</h1>
                        <table className="pre-registration__table">
                            <thead>
                            <tr>
                                <th></th>
                                <th>광명시민</th>
                                <th>타지역</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>일 시</td>
                                <td>9. 13.(금) 9:00~14:00</td>
                                <td>9. 13.(금) 14:00~16:00</td>
                            </tr>
                            <tr>
                                <td>좌석배정률</td>
                                <td>80 %</td>
                                <td>20 %</td>
                            </tr>
                            <tr>
                                <td>당일 준비물</td>
                                <td>당일 표 수령시 신분증 및 등본 등 거주지 증명서류 지참</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>사전신청</td>
                                <td>
                                    <Link href={'https://forms.gle/X1sXcogoL7BZpoCZ7'}>
                                        <Button type={'primary'} shape={'default'}>
                                            <div>광명시민<br/>사전신청</div>
                                        </Button>
                                    </Link>
                                </td>
                                <td>
                                    <Link href={'https://forms.gle/ZZY7m35o9y28DwZ97'}>
                                        <Button type={'primary'} shape={'default'} disabled={!isNonCitizenActive}>
                                            <div>광명시민 외<br/>사전신청</div>
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="info">
                        <h1 className="info__big-title">당첨자 통보</h1>
                        <div className="info__title theme-color-t">
                            ※ 9. 15. ~ 9. 16. 중 당첨자 개별 통보 <br/>
                            ※ 당첨자 중 불참자 발생 시 후순위자에게 별도 연락을 드릴 수 있습니다.
                        </div>
                    </div>
                    <div className="info">
                        <h1 className="info__big-title">당첨 통보를 받으신 분</h1>
                        <div className="info__title theme-color-t">
                            ※ 13:40 까지 입장표를 수령한 당첨자에 한하여 현장에서 표를 배부합니다. <br/>
                        </div>
                    </div>
                    <div className="info">
                        <h1 className="info__big-title">모든 참여자분께</h1>
                        <div className="info__title theme-color-t">
                            ※ 개막식이 시작되는 14시까지 착석해 주셔야 하며, 중간 입장은 불가합니다. <br/>
                            ※ 극장 내 풍선, 현수막, 카메라 휴대금지 입니다.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
