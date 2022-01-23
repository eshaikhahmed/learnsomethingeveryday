import * as firebase from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyBlRnMobiwRXtF070kfMs7tf1R085XL0-I",
    authDomain: "everdaysomething-acaf0.firebaseapp.com",
    projectId: "everdaysomething-acaf0",
    storageBucket: "everdaysomething-acaf0.appspot.com",
    messagingSenderId: "1055508337188",
    appId: "1:1055508337188:web:a0bc00e18554903dcbbeb1",
    measurementId: "G-BX649X6096"
  };
    
  const FireBase = firebase.initializeApp(firebaseConfig);
  export default FireBase;