import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDir49gvJ2okJpA5FNzTU7leIcK8xV0d2U",
  authDomain: "museum-397f4.firebaseapp.com",
  projectId: "museum-397f4",
  storageBucket: "museum-397f4.appspot.com",
  messagingSenderId: "291703737397",
  appId: "1:291703737397:web:6b5430c924e34ef0a2757c",
  measurementId: "G-KV5PCWFHBM"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
