// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsG9VH1H2LgsruvcYi-TbMQ_tTUMOyqPI",
  authDomain: "landlord-b89d4.firebaseapp.com",
  projectId: "landlord-b89d4",
  storageBucket: "landlord-b89d4.appspot.com",
  messagingSenderId: "700502259201",
  appId: "1:700502259201:web:a33c04b23724fdea4fb200"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;