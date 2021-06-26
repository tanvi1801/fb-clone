import firebase from "firebase";
const firebaseConfig= {
    apiKey: "AIzaSyAY89GDM4_iXSHlk7YVbVSFoSXffcYtjdQ",
    authDomain: "facebook-clone-b2bab.firebaseapp.com",
    projectId: "facebook-clone-b2bab",
    storageBucket: "facebook-clone-b2bab.appspot.com",
    messagingSenderId: "924981041480",
    appId: "1:924981041480:web:03c547d6551c5cb7ff7b7d",
    measurementId: "G-MNQBMH278V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;