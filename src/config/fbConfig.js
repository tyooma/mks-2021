import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAOlFDryBynsu0y8kM8lOwvtorcOON5hbM',
  authDomain: 'eventcalendar-77de9.firebaseapp.com',
  projectId: 'eventcalendar-77de9',
  storageBucket: 'eventcalendar-77de9.appspot.com',
  messagingSenderId: '168596551532',
  appId: '1:168596551532:web:8139c013260454c751a549'
}

export const app = firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
