// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAofknehmK_waJWPz0sLd1SK9chkRWYNI",
    authDomain: "test-3bc39.firebaseapp.com",
    projectId: "test-3bc39",
    storageBucket: "test-3bc39.appspot.com",
    messagingSenderId: "346139691441",
    appId: "1:346139691441:web:b335aa0112e4e097f85590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app