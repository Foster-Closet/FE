import React from 'react'
import axios from 'axios'
import { bool } from 'prop-types'
import { StyledMenu } from './Menu.styled'
import { Link, BrowserRouter } from 'react-router-dom'

const Menu = ({ open, auth }) => {
  const handleLogout = () => {
    axios.post('https://foster-closet.herokuapp.com/auth/token/logout/', {
      headers: { Authorization: `Token ${auth}` }
    })
  }

  return (
    <StyledMenu open={open}>
      <BrowserRouter>
        <Link to='/foster-family-dashboard'>
          <span aria-label='my dashboard' />
          My Dashboard
        </Link>
        <Link to='/messaging'>
          <span aria-label='messaging' />
          Messaging
        </Link>
        <Link onClick={() => handleLogout()}>
          <span aria-label='logout' />
          Logout
        </Link>
      </BrowserRouter>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired
}

export default Menu
