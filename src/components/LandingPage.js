import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='DLandingPage mw7 ma6 pa5 ph10 ba br3 fl w-100'>
      <h1 className='underline flex justify-center mh2 mv3'>
        Welcome to The Virtual Foster Closet!
      </h1>
      <h2 className='flex justify-center h2 ma3 pv2 pa1 ph3'>
        It takes a village to raise a child!
      </h2>
      <h2 className='flex justify-center h2 ma3 pv1 pa1 ph3'>
        Thank You for your support!
      </h2>
      <div className='ba br3 fl w-100 gold bg-lightest-blue' />
      <center>
        <Link to='/register'>Register</Link> or <Link to='/login'>Login</Link>
      </center>
    </div>
  )
}

export default LandingPage
