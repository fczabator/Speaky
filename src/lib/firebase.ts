import * as firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyArlrTFlXmUoxJvL2KSYW4Ppw_TghC7z7I',
  authDomain: 'speaky-d9d9b.firebaseapp.com',
  databaseURL: 'https://speaky-d9d9b.firebaseio.com',
  projectId: 'speaky-d9d9b',
  storageBucket: 'speaky-d9d9b.appspot.com',
  messagingSenderId: '522473763493'
};

const firebaseApp = firebase.initializeApp(config);

export const addToTest = (value: string) =>
  firebaseApp
    .firestore()
    .collection('test')
    .add({text: value});
