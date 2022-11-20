import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDU6Pjpy6e0J_2_8jjCAbRZVw3TJp2YAAU",
    authDomain: "nordhouse-4d932.firebaseapp.com",
    projectId: "nordhouse-4d932",
    storageBucket: "nordhouse-4d932.appspot.com",
    messagingSenderId: "640883765760",
    appId: "1:640883765760:web:e59e7faaa9c7a2db489ee5",
    measurementId: "G-BQMRQ0988B"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)