import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQAfBWelAGX-NWGiqa0tOFZxeZFuW8i34",
  authDomain: "keyboard-store-react.firebaseapp.com",
  projectId: "keyboard-store-react",
  storageBucket: "keyboard-store-react.appspot.com",
  messagingSenderId: "361807237792",
  appId: "1:361807237792:web:a54fb388dc15ae199e6fc5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);