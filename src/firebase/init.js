import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAt4gq7yvjOzMYAslmMPfnZa7ReOE6FJWA",
    authDomain: "smoothies-cee96.firebaseapp.com",
    databaseURL: "https://smoothies-cee96.firebaseio.com",
    projectId: "smoothies-cee96",
    storageBucket: "smoothies-cee96.appspot.com",
    messagingSenderId: "432704331408"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots:true})

//export firestore database
export default firebaseApp.firestore()