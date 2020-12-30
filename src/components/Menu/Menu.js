import React from 'react'
import { bool } from 'prop-types'
import { StyledMenu } from './Menu.styled'
import { Link, BrowserRouter } from 'react-router-dom'
// create a "checked" function that checks to see whether you are logged in as a FF or as a Donor to display the correct dashboard when clicked

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <BrowserRouter>
        <Link to='/foster-family-dashboard'>
          <span aria-label='my dashboard' />
        My Dashboard
      </Link>
        <Link to='/notifications'>
          <span aria-label='notifications' />
        Notifications
      </Link>
        <Link to='/messaging'>
          <span aria-label='messaging' />
        Messaging
      </Link>
        <Link to='/'>
          <span aria-label='logout' />
        Log Out
      </Link>
      </BrowserRouter>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired
}

export default Menu
