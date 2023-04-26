import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link } from "react-router-dom";
const firebaseConfig = {
  apiKey: "AIzaSyD3OB6JuOMDuwIgVOm2jy5VSLWvpNp3AJM",
  authDomain: "breadwinner-fork.firebaseapp.com",
  projectId: "breadwinner-fork",
  storageBucket: "breadwinner-fork.appspot.com",
  messagingSenderId: "837145168412",
  appId: "1:837145168412:web:c80fefe535684c8b492dd9",
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
