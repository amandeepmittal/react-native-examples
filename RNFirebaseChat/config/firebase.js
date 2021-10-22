import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Constants from 'expo-constants';

// Initialize Firebase
const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
  databaseURL: Constants.manifest.extra.databaseURL
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const database = firebase.firestore();
