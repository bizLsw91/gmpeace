"use client"
import {isCurrentWithinKSTRange} from "@/lib/utils";
import moment from "moment/moment";

export default function TimeUtil() {
    const {isBetween:isRange} = isCurrentWithinKSTRange('20240920 2344','20240921 0106')
    const currentUTCTime = moment().add(9,'hour').utc();
    const now = moment()

    // 시작 시간과 종료 시간을 'YYYYMMDD HHmm' 형식의 한국 시간(KST, UTC+9)으로 변환 후 UTC로 변환
    const startTimeUTC = moment('20240920 2344', 'YYYYMMDD HHmm').utc();
    const endTimeUTC = moment('20240921 0055', 'YYYYMMDD HHmm').utc();
    return (
        <div className="">
            <div>isCurrentWithinKSTRange: {isRange + ''}</div>
            <div>currentUTCTime: {currentUTCTime+''}</div>
            <div>startTimeUTC: {startTimeUTC+''}</div>
            <div>endTimeUTC: {endTimeUTC+''}</div>
        </div>
    );
}
