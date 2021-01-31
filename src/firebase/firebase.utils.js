import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyDuUIQnfrw71QSfT-2BGEG6bRh1caHs58w",
    authDomain: "crwn-db-30713.firebaseapp.com",
    projectId: "crwn-db-30713",
    storageBucket: "crwn-db-30713.appspot.com",
    messagingSenderId: "276114279231",
    appId: "1:276114279231:web:ce19674dd3a39edd57218a",
    measurementId: "G-BWK2MMFGHM"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;

