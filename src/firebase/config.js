// import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'

// const firebaseConfig = {
//     apiKey: "AIzaSyCDxzx2u3Q8re9bd_FGkV0OTnMYnEbFevo",
//     authDomain: "udemy-firebase-sites-9bc98.firebaseapp.com",
//     projectId: "udemy-firebase-sites-9bc98",
//     storageBucket: "udemy-firebase-sites-9bc98.appspot.com",
//     messagingSenderId: "211741095964",
//     appId: "1:211741095964:web:db875cc52db88a84a107d9"
//   };

// /// init firebase
// initializeApp(firebaseConfig)

// // init services
// const db = getFirestore()

// export { db }

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
        apiKey: "AIzaSyCDxzx2u3Q8re9bd_FGkV0OTnMYnEbFevo",
        authDomain: "udemy-firebase-sites-9bc98.firebaseapp.com",
        projectId: "udemy-firebase-sites-9bc98",
        storageBucket: "udemy-firebase-sites-9bc98.appspot.com",
        messagingSenderId: "211741095964",
        appId: "1:211741095964:web:db875cc52db88a84a107d9"
      };

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

// export firestore
export { projectFirestore , timeStamp }