import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCDaAlJ74GR2VzbionYu8WQFlUmcCo42sg",
  authDomain: "otp-verification-5f126.firebaseapp.com",
  projectId: "otp-verification-5f126",
  storageBucket: "otp-verification-5f126.appspot.com",
  messagingSenderId: "787454977783",
  appId: "1:787454977783:web:8cd3f76d260906026055f2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase
