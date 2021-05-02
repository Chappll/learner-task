  import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAHWnKqYaIo1tjrfSTVWoh1miFAAN-KpGk",
    authDomain: "learner-d394c.firebaseapp.com",
    projectId: "learner-d394c",
    storageBucket: "learner-d394c.appspot.com",
    messagingSenderId: "1036387412314",
    appId: "1:1036387412314:web:1ab5e523161add8d4dab63",
    measurementId: "G-R5XNK6E1LR"
};

firebase.initializeApp(firebaseConfig);

export default firebase;