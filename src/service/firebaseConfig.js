// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

    authDomain: "fir-tutorials-7494c.firebaseapp.com",

    databaseURL: "https://fir-tutorials-7494c-default-rtdb.firebaseio.com",

    projectId: "fir-tutorials-7494c",

    storageBucket: "fir-tutorials-7494c.appspot.com",

    messagingSenderId: "825304401511",

    appId: "1:825304401511:web:ab96cc70095314b7ec76c2"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);