import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDyoc8QRiRPp2ePhrC_o_q5xwlF4f5WmU4",
  authDomain: "breadwinners-fork.firebaseapp.com",
  projectId: "breadwinners-fork",
  storageBucket: "breadwinners-fork.appspot.com",
  messagingSenderId: "162812804556",
  appId: "1:162812804556:web:e0b993f7123970e20bf169"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
