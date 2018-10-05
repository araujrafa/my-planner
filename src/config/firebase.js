import firebase from 'firebase/app'

import 'firebase/database'


firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
});

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child('todos');
export const booksRef = databaseRef.child('books');
