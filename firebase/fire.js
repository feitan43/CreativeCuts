import firebase from 'firebase'
require('firebase/auth');
const firebaseConfig = {
    apiKey: "AIzaSyCM2S9rkO1ZSUK-Yd46utOQAYgBQbdjLm0",
    authDomain: "reactnativefirebase-0528.firebaseapp.com",
    databaseURL: "https://reactnativefirebase-0528-default-rtdb.firebaseio.com",
    projectId: "reactnativefirebase-0528",
    storageBucket: "reactnativefirebase-0528.appspot.com",
    messagingSenderId: "426949534948",
    appId: "1:426949534948:web:9936c8dfed1fb32ba038f1",
    measurementId: "G-M5TYXLDQ21"
  };

let Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase