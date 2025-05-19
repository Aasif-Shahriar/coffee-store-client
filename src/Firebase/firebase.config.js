import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSWHjTQu-7-IIENTDNiUlkKKGZzf1V_NA",
  authDomain: "coffee-store-app-46d26.firebaseapp.com",
  projectId: "coffee-store-app-46d26",
  storageBucket: "coffee-store-app-46d26.firebasestorage.app",
  messagingSenderId: "346545906437",
  appId: "1:346545906437:web:9006a6cfb509d196298d6c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);