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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    // make sure that a user is signed in
    if(!userAuth) {
        console.log("User not signed in...")
        return;
    }

    const ref = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await ref.get();

    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            ref.set({
                displayName,
                email, 
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return ref;
};

firebase.initializeApp(config);

// this gives us access to these firebase functions in other compononents
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;