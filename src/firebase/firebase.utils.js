import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDe9I9HugaG5iFeRdUsT1kj2vZakUVjziA",
    authDomain: "crwn-db-74df8.firebaseapp.com",
    projectId: "crwn-db-74df8",
    storageBucket: "crwn-db-74df8.appspot.com",
    messagingSenderId: "423007321458",
    appId: "1:423007321458:web:dd560bdbc84bf410def1eb",
    measurementId: "G-LFNZR6F087"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;