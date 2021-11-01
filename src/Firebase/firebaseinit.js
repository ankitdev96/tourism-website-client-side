import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfirg";

const initializeAuth = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAuth;