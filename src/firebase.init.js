// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNQw3YMeB1Rh4zwPmspwkdZgRzrN8jmFc",
  authDomain: "manufacture-computer.firebaseapp.com",
  projectId: "manufacture-computer",
  storageBucket: "manufacture-computer.appspot.com",
  messagingSenderId: "539222244233",
  appId: "1:539222244233:web:d94cd8aff980d7a884bf58"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;