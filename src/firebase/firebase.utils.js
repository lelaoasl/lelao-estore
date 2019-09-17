import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAZ7oCiU9WwbQnLWy76AX2BzkmZIwwcpYg",
    authDomain: "lelelis-estore.firebaseapp.com",
    databaseURL: "https://lelelis-estore.firebaseio.com",
    projectId: "lelelis-estore",
    storageBucket: "",
    messagingSenderId: "654467850877",
    appId: "1:654467850877:web:5bff223646739bf70cc714"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;
