import React from 'react'
import { useContext, createContext } from 'react'
import ReactDOM from 'react-dom/client'
import {
  collection,
  addDoc,
  Timestamp,
  getDocs,
  doc,
  query,
  onSnapshot,
  orderBy,
} from 'firebase/firestore'
import 'firebase/firestore'
import 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

import { getFirestore } from 'firebase/firestore'

import App from './App'
const firebaseConfig = {
  apiKey: 'AIzaSyBen1qkEPTK9UT3fTqOXry8Rm0Y0F5QwU4',
  authDomain: 'chat1-60669.firebaseapp.com',
  projectId: 'chat1-60669',
  storageBucket: 'chat1-60669.appspot.com',
  messagingSenderId: '361427261722',
  appId: '1:361427261722:web:070d4868ff6d6033aeb4a3',
  measurementId: 'G-JX8RJ4BLFM',
}
export const Context = createContext(null)
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)
const firestore = getFirestore(app)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Context.Provider
    value={{
      auth,
      firestore,
    }}>
    <App />
  </Context.Provider>
)
