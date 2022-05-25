import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, updateProfile } from 'firebase/auth'
import { toast } from 'react-toastify'


const firebaseConfig = {
    apiKey: "AIzaSyBLrUYjyTm2Ia2X2ZGjrgz7eh-0Ocqs1eI",
    authDomain: "chat-app-36c32.firebaseapp.com",
    projectId: "chat-app-36c32",
    storageBucket: "chat-app-36c32.appspot.com",
    messagingSenderId: "557529634834",
    appId: "1:557529634834:web:4227470ab0d704656aa0cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app)

// Auth 
const auth = getAuth()

// Storage
export async function upload(file, currentUser) {
    const fileRef = ref(storage, currentUser.uid + '.png');
    const snapshot = await uploadBytes(fileRef, file)
    const photoURL = await getDownloadURL(fileRef)

    updateProfile(auth.currentUser, {
        photoURL,
    })
}
