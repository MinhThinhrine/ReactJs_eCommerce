// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "process.env.REDIRECT_API_KEY",
    authDomain: "ecommerce-cf40a.firebaseapp.com",
    databaseURL: "https://ecommerce-cf40a-default-rtdb.firebaseio.com",
    projectId: "ecommerce-cf40a",
    storageBucket: "ecommerce-cf40a.appspot.com",
    messagingSenderId: "510608857654",
    appId: "1:510608857654:web:92afa912aa9af136b39697",
    measurementId: "G-XPDMZMTM1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
export {database};