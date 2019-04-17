import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCsKLZmPwmhmhlotyt7pVhbD6AmCL_-UwM",
    authDomain: "plutus-e6e9a.firebaseapp.com",
    databaseURL: "https://plutus-e6e9a.firebaseio.com",
    projectId: "plutus-e6e9a",
    storageBucket: "plutus-e6e9a.appspot.com",
    messagingSenderId: "311353534723"
  };
  firebase.initializeApp(config);
  //firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;
