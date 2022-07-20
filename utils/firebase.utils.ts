import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_APP_FIREBASE_,
    authDomain: "diet-checker-b2156.firebaseapp.com",
    projectId: "diet-checker-b2156",
    storageBucket: "diet-checker-b2156.appspot.com",
    messagingSenderId: "514886684161",
    appId: "1:514886684161:web:5d02dda8293a716c9b3a00",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
