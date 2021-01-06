import React, { useState } from 'react'
import { bool } from 'prop-types'
import { StyledMenu } from './Menu.styled'
import { Link, BrowserRouter, Redirect } from 'react-router-dom'

const Menu = ({ open, auth }) => {
  const [logout, setLogout] = useState(false)

  const handleLogout = () => {
    fetch('https://foster-closet.herokuapp.com/auth/token/logout/', {
      method: 'POST',
      headers: { Authorization: `Token ${auth}` }
    }).then((resonse) => {
      setLogout(true)
    })
  }

  if (logout) {
    return <Redirect to='/village-app' />
  }

  return (
    <StyledMenu open={open}>
      <BrowserRouter>
        <Link to='/my-dashboard'>
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
