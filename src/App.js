// Firebase deps
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAQ3f8k0_1t1LbJJwwAXoM4UUlzxT9snA4",
  authDomain: "react-firechat-344a1.firebaseapp.com",
  projectId: "react-firechat-344a1",
  storageBucket: "react-firechat-344a1.appspot.com",
  messagingSenderId: "166530061936",
  appId: "1:166530061936:web:fbde0a35ca589bea15c6b5"
};

firebase.initializeApp(firebaseConfig);

function App() {
  return <div></div>;
}

export default App;