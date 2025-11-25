// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBMQQyhAmJXxNPPCD8q93q_Hnji7uMu634',
  authDomain: 'auth-profile-68d26.firebaseapp.com',
  projectId: 'auth-profile-68d26',
  storageBucket: 'auth-profile-68d26.firebasestorage.app',
  messagingSenderId: '303414432004',
  appId: '1:303414432004:web:6a7530b4813739807b0051',
  measurementId: 'G-1PPWQ8LF5W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
