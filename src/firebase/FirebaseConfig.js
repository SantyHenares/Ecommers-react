import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbNrCSpr4JJwf-oZW5mmYqFxItOilte_U",
  authDomain: "invc-38060.firebaseapp.com",
  projectId: "invc-38060",
  storageBucket: "invc-38060.appspot.com",
  messagingSenderId: "477939042340",
  appId: "1:477939042340:web:fa9153672502821554b0b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
