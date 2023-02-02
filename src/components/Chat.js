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
import React, { useContext, useAuthState, useState, useEffect } from 'react'
import { Context } from '../index'
import { Container, Button, Grid, TextField, Avatar } from '@mui/material'

const Chat = () => {
  const { auth, firestore } = useContext(Context)
  const [user] = useAuthState(auth)
  const [value, setValue] = useState('')

  const [messagesData, setMessagesData] = useState([])

  const sendMessage = async () => {
    try {
      const docRef = await addDoc(collection(firestore, 'messages'), {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: value,
        createdAt: Timestamp.fromDate(new Date()),
      })

      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
    setValue('')
  }

  const getMessages = async () => {
    const q = query(
      collection(firestore, 'messages'),
      orderBy('createdAt', 'asc')
    )

    onSnapshot(q, (querySnapshot) => {
      setMessagesData([])

      querySnapshot.docs.map((doc) => {
        setMessagesData((prevState) => {
          return [...prevState, doc.data()]
        })
      })
    })
  }

  useEffect(() => {
    getMessages()
  }, [])
}

export default Chat
