import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <Link to='/foster-family-signup'>Register</Link> /{' '}
      <Link to='/foster-family-login'>Login</Link> as a Foster Family or{' '}
      <Link to='/donor-signup'>Register</Link> /{' '}
      <Link to='/donor-login'>Login</Link> as a Donor
    </div>
  )
}

export default LandingPage
