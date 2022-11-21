import { initializeApp } from "firebase/app";
import { collection, addDoc,getDocs,getFirestore} from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwzDCKDZp5lUR_KMs4PO3ixwZ2Ay_JSR0",
  authDomain: "rex-cps731.firebaseapp.com",
  projectId: "rex-cps731",
  storageBucket: "rex-cps731.appspot.com",
  messagingSenderId: "912913915010",
  appId: "1:912913915010:web:c6223bda97e3b51643689b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);