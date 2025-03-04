import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import serviceAccount from "../../../chapterone-firebase-sdk-key.json";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APP_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const dbFirestore = getFirestore();
