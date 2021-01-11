import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='mw7 ma6 pa5 ph10 ba br3 fl w-100'>
      <h1 className='underline flex justify-center mh2 mv3'>
        Virtual Foster Closet
      </h1>
      <center>
        <img
          src='https://burst.shopifycdn.com/photos/happy-boy-swinging-from-parents-arms-on-christmas-morning.jpg'
          class='w-50 br3'
          alt='foster family holding paper family cutout'
        />
        <h2 className='flex justify-center h2 ma3 pv2 pa1 ph3'>
          It takes a village to raise a child!
        </h2>
        <p className='flex justify-center ma3 pv1 pa5 ph3'>
          We believe that children in foster care should live as normal a life
          as possible. We also believe that the community needs to come together
          to help Foster Parents and Kinship Guardians make that happen. Please
          consider donating requested items to our local foster families so they
          can better support the children in their care.
        </p>
      </center>
      <div className='ba br3 fl w-100 gold bg-lightest-blue' />
      <center>
        <Link to='/register'>Register</Link> or <Link to='/login'>Login</Link>
      </center>
    </div>
  )
}

export default LandingPage
