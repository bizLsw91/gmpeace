import { clsx, type ClassValue } from "clsx"
import moment from "moment";
import {ReadonlyURLSearchParams} from "next/navigation";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// URLSearchParams 객체를 JSON으로 변환하는 함수
export const searchParamsToJson = (searchParams: ReadonlyURLSearchParams) => {
  const params:{ [key: string]: string }= {};

  // URLSearchParams 객체를 순회하며 key-value 쌍을 객체에 담음
  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  return params;
};

// utc timestamp to kst
export function convertToKST_date(timestamp:string) {
  return moment.utc(timestamp).add(9, 'hours').format('YYYY-MM-DD');
}

// 현재 UTC 시간이 주어진 'YYYYMMDD HHmm' 형식의 한국 시간 범위 내에 있는지 확인하는 함수
export function isCurrentWithinKSTRange(startTime: string, endTime: string) {
  // 현재 UTC 시간
  const currentTime = moment().add(9,'hour');

  const startTimeKCT = moment(startTime, 'YYYYMMDD HHmm');
  const endTimeKCT = moment(endTime, 'YYYYMMDD HHmm');
  const isBetween = currentTime.isBetween(startTimeKCT, endTimeKCT, null, '[)'); // []는 경계 포함

  // 현재 UTC 시간이 시작 시간과 종료 시간 범위 안에 있는지 확인
  return {isBetween, currentTime, endTimeKCT}
}