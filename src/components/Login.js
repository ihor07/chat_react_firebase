import { Box, Button, Container, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../index'

const Login = () => {
  const { auth } = useContext(Context)

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
            <Button variant="outlined">Login with Google account</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
export default Login
