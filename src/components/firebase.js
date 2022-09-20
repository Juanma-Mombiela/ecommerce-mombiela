import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBj04Y06x229qjcgjdxBUvwjh_D-w0HrU4",
  authDomain: "tierra-media.firebaseapp.com",
  projectId: "tierra-media",
  storageBucket: "tierra-media.appspot.com",
  messagingSenderId: "90304656223",
  appId: "1:90304656223:web:43467d44e3f4ede8de3cea"
};

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)
