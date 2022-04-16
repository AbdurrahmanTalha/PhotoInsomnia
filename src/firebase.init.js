// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAUDEKXwCdO02WKW2Sa4Kfy7p0jZnlnds",
  authDomain: "independent-service-prov-74ae6.firebaseapp.com",
  projectId: "independent-service-prov-74ae6",
  storageBucket: "independent-service-prov-74ae6.appspot.com",
  messagingSenderId: "325399342773",
  appId: "1:325399342773:web:e0ef261758b40f06d598fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;