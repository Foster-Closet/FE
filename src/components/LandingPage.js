import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <h1>
        <Link to='/foster-family-register'>Register</Link> /{' '}
        <Link to='/foster-family-login'>Login</Link> as a Foster Family or{' '}
        <Link to='/donor-register'>Register</Link> /{' '}
        <Link to='/donor-login'>Login</Link> as a Donor
      </h1>
    </div>
  )
}

export default LandingPage
