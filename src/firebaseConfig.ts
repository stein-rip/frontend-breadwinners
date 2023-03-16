import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD3OB6JuOMDuwIgVOm2jy5VSLWvpNp3AJM",
  authDomain: "breadwinner-7c412.firebaseapp.com",
  projectId: "breadwinner-7c412",
  storageBucket: "breadwinner-7c412.appspot.com",
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
