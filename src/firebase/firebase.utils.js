import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyATCXTpPx8vOh0242P1PxSFxbEq2cMBacE",
    authDomain: "crwn-db-345cf.firebaseapp.com",
    projectId: "crwn-db-345cf",
    storageBucket: "crwn-db-345cf.appspot.com",
    messagingSenderId: "838998304171",
    appId: "1:838998304171:web:13699ac9668249edf3deee",
    measurementId: "G-0KJ48FPJ9W"
};

firebase.initializeApp(config);

// this gives us access to these firebase functions in other compononents
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;