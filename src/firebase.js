import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBh2HZcpaoqQPLqOWCgy0kw15Z6VpKgGKg",
  authDomain: "cayelitur-80235.firebaseapp.com",
  projectId: "cayelitur-80235",
  storageBucket: "cayelitur-80235.appspot.com",
  messagingSenderId: "549956166902",
  appId: "1:549956166902:web:45966a76ecffd8d516b8d7"
};



export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore();
export const storage = getStorage();
export const auth = getAuth();
