import { clsx, type ClassValue } from "clsx"
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