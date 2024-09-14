import {storage} from "@/firebase/firebase.admin.config";
import {UploadFile} from "antd";
import { clsx, type ClassValue } from "clsx"
import moment from "moment";
import {ReadonlyURLSearchParams} from "next/navigation";
import { twMerge } from "tailwind-merge"
const { v4: uuidv4 } = require('uuid');
import { RcFile } from 'antd/es/upload';

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

/**
 * 파일을 업로드하고 URL을 반환하는 함수
 * @param {UploadFile} file - 업로드할 파일
 * @returns {Promise<string>} - 업로드된 파일의 URL
 */
async function uploadFileAndGetUrl(file:UploadFile) {
  try {
    const fileName = `${uuidv4()}-${file.name}`;
    const fileUpload = storage.file(fileName);

    const stream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.type,
      },
    });

    stream.on('error', (error:any) => {
      throw new Error(`File upload error: ${error.message}`);
    });

    stream.on('finish', async () => {
      await fileUpload.makePublic();
    });

    stream.end(file.originFileObj);

    const publicUrl = `https://storage.googleapis.com/${storage.name}/${fileName}`;
    return publicUrl;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}

// utc timestamp to kst
export function convertToKST_date(timestamp:string) {
  return moment.utc(timestamp).add(9, 'hours').format('YYYY-MM-DD');
}