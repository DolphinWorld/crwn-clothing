import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyA36PUEOjDvJoWQDMN5fb_HNilXAPjPHbo",
  authDomain: "crwn-db-41a15.firebaseapp.com",
  projectId: "crwn-db-41a15",
  storageBucket: "crwn-db-41a15.appspot.com",
  messagingSenderId: "1070620593952",
  appId: "1:1070620593952:web:6568e895febfe8ebae1145",
  measurementId: "G-JPSMKFD1FL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default signInWithGoogle;
// export default firebase;
