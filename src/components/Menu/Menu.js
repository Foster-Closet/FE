import React from 'react'
import { bool } from 'prop-types'
import { StyledMenu } from './Menu.styled'

// create a "checked" function that checks to see whether you are logged in as a FF or as a Donor to display the correct dashboard when clicked

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href='/foster-family-dashboard'>
        <span aria-label='my dashboard' />
        My Dashboard
      </a>
      <a href='/notifications'>
        <span aria-label='notifications' />
        Notifications
      </a>
      <a href='/messaging'>
        <span aria-label='messaging' />
        Messaging
      </a>
      <a href='/chatapp'>
        <span aria-label='messaging' />
        Chat
      </a>
      <a href='/'>
        <span aria-label='logout' />
        Log Out
      </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired
}

export default Menu
