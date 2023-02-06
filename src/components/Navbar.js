import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/ToggleButton'
import Grid from '@mui/material/Grid'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts'
import { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../index'

const Navbar = () => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent={'flex-end'}>
          {user ? (
            <Button onClick={() => auth.signOut()}>Exit</Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button>Login</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar
