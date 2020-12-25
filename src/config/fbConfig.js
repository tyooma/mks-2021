import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBFt1D-xxpUH4YVTFFQFNtvV3To6l9MIWE",
  authDomain: "mks2021-b903a.firebaseapp.com",
  projectId: "mks2021-b903a",
  storageBucket: "mks2021-b903a.appspot.com",
  messagingSenderId: "934400836310",
  appId: "1:934400836310:web:edd4ad86924bd598a6ff77"
}

export const app = firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
