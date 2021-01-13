import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <center>
        <div className='f3 b pa1'>
          <Link to='/register'>Register</Link> or <Link to='/login'>Login</Link>
        </div>
        <h1>
          It takes a village to raise a child!
        </h1>
        <img
          src='https://burst.shopifycdn.com/photos/happy-boy-swinging-from-parents-arms-on-christmas-morning.jpg'
          class='w-30 br3'
          alt='foster family holding paper family cutout'
        />
        <h2 className='f4 b w-40 flex justify-center pa1'>
          Virtual Foster Closet is dedicated to providing essential items for children in foster care.
          Fosrer Families provide a stable, loving and nurturing environment.
          Please consider donating requested items to our local foster families so they
          can better support the children in their care.
        </h2>
      </center>
    </div>
  )
}

export default LandingPage
