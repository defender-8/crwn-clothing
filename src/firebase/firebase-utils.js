import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA7g3CyNh8XC_j_xfstf-gQ-AXfLbnPwek',
  authDomain: 'crwn-db-ed0c5.firebaseapp.com',
  databaseURL: 'https://crwn-db-ed0c5.firebaseio.com',
  projectId: 'crwn-db-ed0c5',
  storageBucket: 'crwn-db-ed0c5.appspot.com',
  messagingSenderId: '729821659333',
  appId: '1:729821659333:web:bb33d98be9e951803a30ac',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export default firebase;
