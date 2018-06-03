require('dotenv').config({ path: __dirname + '/.env' });

console.log(process.env);
export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'test-project-1ca1b.firebaseapp.com',
  databaseURL: 'https://test-project-1ca1b.firebaseio.com',
  projectId: 'test-project-1ca1b',
  storageBucket: 'test-project-1ca1b.appspot.com',
  messagingSenderId: '165199418530'
};
