import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: 'AIzaSyBUUaByENtH-QWL3w1AIW1rcjXeQo4_aXE',
  authDomain: 'filmy-profiles.firebaseapp.com',
  databaseURL: 'https://filmy-profiles.firebaseio.com',
  projectId: 'filmy-profiles',
  storageBucket: 'filmy-profiles.appspot.com',
  messagingSenderId: '82052180042'
};


const devConfig = {
  apiKey: 'AIzaSyBUUaByENtH-QWL3w1AIW1rcjXeQo4_aXE',
  authDomain: 'filmy-profiles.firebaseapp.com',
  databaseURL: 'https://filmy-profiles.firebaseio.com',
  projectId: 'filmy-profiles',
  storageBucket: 'filmy-profiles.appspot.com',
  messagingSenderId: '82052180042'
};
  
const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;
  firebase.initializeApp(config);

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
