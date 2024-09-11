import {getFirestore} from "firebase-admin/firestore";
const { getStorage } = require('firebase-admin/storage');
const {initializeApp, getApp, getApps, cert} = require('firebase-admin/app');
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || '{}');

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