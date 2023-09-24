import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCVxGOmosML19O6P8bse5bSDvx6HW_UeyI',
  authDomain: 'devfest-auckland.firebaseapp.com',
  databaseURL: 'https://devfest-auckland.firebaseio.com',
  projectId: 'devfest-auckland',
  storageBucket: 'devfest-auckland.appspot.com',
  messagingSenderId: '958563701490',
  appId: '1:958563701490:web:0324e472c4cb93bd22f66b',
  measurementId: 'G-MEASUREMENT_ID',
});
export const db = getFirestore(firebaseApp);
