import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

//Los keys de REACT como aplicacion
const firebaseConfig = {
  apiKey: "AIzaSyD3Vjn-FWAZkJQn_mZ06mnLvNE2aetzBqI",
  authDomain: "comision-34705.firebaseapp.com",
  projectId: "comision-34705",
  storageBucket: "comision-34705.appspot.com",
  messagingSenderId: "272036905770",
  appId: "1:272036905770:web:a534e1daddd22da1735453"
};

//Esta variable representa "la plataforma firebase"
const app = initializeApp(firebaseConfig);

//Esta variable representa "la base de datos"
export const db = getFirestore(app)