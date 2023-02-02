import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/ToggleButton'
import Grid from '@mui/material/Grid'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts'

const Navbar = () => {
  const user = false
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent={'flex-end'}>
          {user ? (
            <Button>Exit</Button>
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
