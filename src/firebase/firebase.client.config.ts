// Import the functions you need from the SDKs you need
import {initializeApp, getApp, getApps} from "firebase/app";
import {
    getAuth,
    sendSignInLinkToEmail,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    signOut,
    deleteUser,
    onAuthStateChanged
} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseClientConfig = {
    apiKey: "AIzaSyDWTpwZ_x9cjvPQJUxEalwqMHLrB7yOgBI",
    authDomain: "gmpeace-76b43.firebaseapp.com",
    projectId: "gmpeace-76b43",
    storageBucket: "gmpeace-76b43.appspot.com",
    messagingSenderId: "779317415924",
    appId: "1:779317415924:web:f5d9c397a6b4b5e88d33a1",
    measurementId: "G-LVPCCPFYGK"
};
// Initialize Firebase
let app;
if (!getApps().length) {
    app = initializeApp(firebaseClientConfig, 'clientApp');
} else {
    app = getApp();
}

// Firebase 앱 초기화
// export const app = initializeApp(firebaseClientConfig,'clientApp');
export const storage = getStorage(app);