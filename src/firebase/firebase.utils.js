import firebase from 'firebase/app'
// notice the /app suffix
// cSpell:disable
import 'firebase/firestore';
//this is the database
import 'firebase/auth';
//authentication
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
