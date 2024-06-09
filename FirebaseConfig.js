// FirebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD8KXkB-dMehqqjj8HxkcXfIobqhesslc4',
  authDomain: 'vendingfinder.firebaseapp.com',
  projectId: 'vendingfinder',
  storageBucket: 'vendingfinder.appspot.com',
  messagingSenderId: '371231490960',
  appId: '1:371231490960:web:02cfad521e5764b2fba915',
  measurementId: 'G-187DQNJYP6',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
