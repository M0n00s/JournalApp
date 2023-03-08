// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnaQslVohfNZsmkMWkX5tKL2sRULuttEI",
  authDomain: "journal2023-9248f.firebaseapp.com",
  projectId: "journal2023-9248f",
  storageBucket: "journal2023-9248f.appspot.com",
  messagingSenderId: "710622240786",
  appId: "1:710622240786:web:5a1332c5e3b87cecb4b8cb",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const fireStore = getFirestore(firebaseApp);
