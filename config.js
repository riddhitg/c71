import*as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAnSFxVsc5bNfxcWh5VYc6zwmJ9K1b_8pM",
    authDomain: "wireleibrary-2b40f.firebaseapp.com",
    databaseURL: "https://wireleibrary-2b40f.firebaseio.com",
    projectId: "wireleibrary-2b40f",
    storageBucket: "wireleibrary-2b40f.appspot.com",
    messagingSenderId: "630559639698",
    appId: "1:630559639698:web:546369d3a8c85db9d8fe4b",
    measurementId: "G-J7DXHLBM8P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()