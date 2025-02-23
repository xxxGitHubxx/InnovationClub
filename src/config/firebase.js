// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdTSUQCEZwEhpczmsHfU7HhlhMfr8PaSQ",
    authDomain: "innovation-club-126o.firebaseapp.com",
    databaseURL: "https://innovation-club-126o-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "innovation-club-126o",
    storageBucket: "innovation-club-126o.firebasestorage.app",
    messagingSenderId: "651865139573",
    appId: "1:651865139573:web:6f895b4179a80e775c8b3c",
    measurementId: "G-6WX598T245"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider;