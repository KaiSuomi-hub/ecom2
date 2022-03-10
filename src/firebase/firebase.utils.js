import firebase from 'firebase/compat/app'
// notice the compat/app suffix
// the tutorial uses an older firebase
// cSpell:disable
import 'firebase/compat/firestore';
//this is the database
// notice the compat/app suffix
// the tutorial uses an older firebase
import 'firebase/compat/auth';
//authentication
// notice the compat/app suffix
// the tutorial uses an older firebase

// cSpell:enable


// cSpell:disable

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
apiKey: "AIzaSyCkCM9vze2F-uwo6FnTwyljiqC4-FfsKsY",
authDomain: "udemy-crwn-clthng.firebaseapp.com",
projectId: "udemy-crwn-clthng",
storageBucket: "udemy-crwn-clthng.appspot.com",
messagingSenderId: "214534738942",
appId: "1:214534738942:web:c23f16f590543c27eae6af",
};

  // Initialize Firebase
firebase.initializeApp(config);
	// cSpell:enable

//here we export out methods for other components to use
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
//when we use the google auth provider we trigger the google account select and login
export const signInWithGoogle = () => auth.signInWithPopup(provider);
// here we specify google as the sign in provider. We have access to twitter and others
//https://console.firebase.google.com/project/udemy-crwn-clthng/authentication/providers

export default firebase;
//this is for whole shebang
