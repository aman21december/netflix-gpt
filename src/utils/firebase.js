// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVx4A2n_b33Dv3TPB-aR2xK7M61SOy798",
  authDomain: "netflix-gpt-41bf9.firebaseapp.com",
  projectId: "netflix-gpt-41bf9",
  storageBucket: "netflix-gpt-41bf9.firebasestorage.app",
  messagingSenderId: "894802120611",
  appId: "1:894802120611:web:e3ed68c9c85ad6b4749416",
  measurementId: "G-L9Y9Y246B2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();