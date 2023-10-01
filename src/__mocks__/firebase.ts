import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyCVxGOmosML19O6P8bse5bSDvx6HW_UeyI",
  authDomain: "devfest-auckland.firebaseapp.com",
  databaseURL: "https://devfest-auckland-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "devfest-auckland",
  storageBucket: "buckets/devfest-auckland.appspot.com",
  messagingSenderId: "958563701490",
  appId: "1:958563701490:web:1469d52e0ac6de4322f66b"
});
export const db = getFirestore(firebaseApp);
