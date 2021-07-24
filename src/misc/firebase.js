import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyCgH8n6qVBc5oeBQtM_PEgSmOhUWxV9VGI',
  authDomain: 'chat-web-app-681fc.firebaseapp.com',
  projectId: 'chat-web-app-681fc',
  storageBucket: 'chat-web-app-681fc.appspot.com',
  messagingSenderId: '359932156148',
  appId: '1:359932156148:web:b3da190d2d52a9e25166a1',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
