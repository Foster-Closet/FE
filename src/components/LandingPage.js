import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <Link to='/register'>Register</Link> or <Link to='/login'>Login</Link>
    </div>
  )
}

export default LandingPage
