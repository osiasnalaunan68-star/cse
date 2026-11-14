import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwk9cwnbizKi-IM-dvwd8C69wPaafWUR4",
  authDomain: "cse-reviewer-ph-fcfbc.firebaseapp.com",
  projectId: "civil-service-564fe",
  storageBucket: "civil-service-564fe.firebasestorage.app",
  messagingSenderId: "418319058791",
  appId: "1:418319058791:web:ce1aa06ab63d71663911c2",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

enableIndexedDbPersistence(db).catch((err) => {
  console.warn("Firestore offline persistence not enabled:", err.code || err);
});
