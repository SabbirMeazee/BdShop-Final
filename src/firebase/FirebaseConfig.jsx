
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDvUJoYY9CwMnZbXMQlvFGw2lzFoxuKQ7I",
    authDomain: "bd-shop-final.firebaseapp.com",
    projectId: "bd-shop-final",
    storageBucket: "bd-shop-final.firebasestorage.app",
    messagingSenderId: "857403525584",
    appId: "1:857403525584:web:2d3e542bd5d852129191d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export { fireDB, auth } 