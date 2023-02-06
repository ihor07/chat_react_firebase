import { Box, Button, Container, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../index'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const Login = () => {
  const { auth } = useContext(Context)

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const { user } = await auth.signInWithPopup(provider)
  }
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 40 }}
        alignItems={'center'}
        justifyContent={'center'}>
        <Grid
          style={{ width: 320, background: 'lightgray' }}
          container
          alignItems={'center'}
          direction={'column'}>
          <Box p={5}>
            <Button onClick={login} variant="outlined">
              Login with Google account
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
export default Login
