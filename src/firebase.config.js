import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBLrUYjyTm2Ia2X2ZGjrgz7eh-0Ocqs1eI",
    authDomain: "chat-app-36c32.firebaseapp.com",
    projectId: "chat-app-36c32",
    storageBucket: "chat-app-36c32.appspot.com",
    messagingSenderId: "557529634834",
    appId: "1:557529634834:web:4227470ab0d704656aa0cb"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()


