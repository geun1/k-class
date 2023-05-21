// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {initializeFirestore} from 'firebase/firestore';

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2LQHg7S0LsqTr-AXofiVc1ewNZuXluy8",
  authDomain: "kuclass-hci.firebaseapp.com",
  projectId: "kuclass-hci",
  storageBucket: "kuclass-hci.appspot.com",
  messagingSenderId: "1020321948403",
  appId: "1:1020321948403:web:842c993d15105b080d4d86",
  measurementId: "G-ZMCBTE7P1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export {db}
