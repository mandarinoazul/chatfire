import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAtRUsgS6Pvni4VEt8v9RpZqqCRDwnlUGA",
  authDomain: "chatonlinerefi.firebaseapp.com",
  projectId: "chatonlinerefi",
  storageBucket: "chatonlinerefi.appspot.com",
  messagingSenderId: "290617225854",
  appId: "1:290617225854:web:6e898f5c206973becb1e2f",
  measurementId: "G-ZYSSE8G5BF"
};

firebase.initializeApp(config);

export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
