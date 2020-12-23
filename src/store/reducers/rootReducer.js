import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

import eventReducer from './eventReducer'
import authReducer from './authReducer'
import mainReducer from './mainReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  event: eventReducer,
  main: mainReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer
