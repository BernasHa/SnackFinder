// FirebaseConfig.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

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
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth };
