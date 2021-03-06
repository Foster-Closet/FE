import React, { useState } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

const Register = ({ auth, onRegister }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .post('https://foster-closet.herokuapp.com/auth/users/', {
        username: username,
        password: password,
        name: name,
        zipcode: zipcode,
        email: email,
        phoneNumber: phoneNumber
      })
      .then((response) => {
        onRegister({ username, password, name, zipcode, email, phoneNumber })
      })
      .catch((error) => {
        console.log(error)
      })
      .then((resonse) => {
        setSubmitted(true)
      })
  }

  if (submitted) {
    return <Redirect to='/my-dashboard' />
  }

  return (
    <div>
      <center>
        <h3 className='f3 b pa1'>
          Sign Up or <Link to='/login'>Login</Link>
        </h3>
        <form onSubmit={handleSubmit}>
          <div className='pa1'>
            <label htmlFor='name' />
            <input
              type='text'
              placeholder='Name'
              id='name'
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className='pa1'>
            <label htmlFor='email' />
            <input
              type='email'
              placeholder='Email'
              id='email'
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className='pa1'>
            <label htmlFor='phoneNumber' />
            <input
              type='tel'
              placeholder='Phone Number'
              id='phoneNumber'
              required
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </div>
          <div className='pa1'>
            <label htmlFor='zipcode' />
            <input
              type='number'
              placeholder='Zipcode'
              id='zipcode'
              required
              value={zipcode}
              onChange={(event) => setZipcode(event.target.value)}
            />
          </div>
          <div className='pa1'>
            <label htmlFor='username' />
            <input
              type='text'
              placeholder='Username'
              id='username'
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className='pa1'>
            <label htmlFor='password' />
            <input
              type='password'
              placeholder='Password'
              id='password'
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className='pa1'>
            <button type='submit'>
              Sign Up
            </button>
          </div>
        </form>
      </center>
    </div>
  )
}

export default Register
