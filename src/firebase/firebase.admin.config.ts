import {serviceAccount} from "@/firebase/gmpeace-cloud-firebase-adminsdk-fmhzx-73c5bd68d0";
import {getFirestore} from "firebase-admin/firestore";
const { getStorage } = require('firebase-admin/storage');
const {initializeApp, getApp, getApps, cert} = require('firebase-admin/app');

let app;
if (!getApps().length) {
    initializeApp({
        credential: cert(serviceAccount),
        storageBucket: "gmpeace-cloud.appspot.com"
    });
} else {
    app = getApp();
}

export const db = getFirestore(app);
export const storage = getStorage(app)