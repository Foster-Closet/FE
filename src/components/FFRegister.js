import React, { useState } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

const FFRegister = ({ auth, onRegister }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .post('https://foster-closet.herokuapp.com/auth/users/', {
        username: username,
        password: password,
        name: name,
        zipcode: zipcode,
        email: email,
        phoneNumber: phoneNumber,
        is_foster: true,
        is_donor: false
      })
      .then((response) => {
        onRegister({ username, password, name, zipcode, email, phoneNumber })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  if (auth) {
    return <Redirect to='/foster-family-dashboard' />
  }

  return (
    <div className='Register'>
      <h3>
        Sign Up or <Link to='/foster-family-login'>Login</Link>
      </h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor='phoneNumber'>Phone Number</label>
          <input
            type='tel'
            id='phoneNumber'
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
          <label htmlFor='zipcode'>Zipcode</label>
          <input
            type='number'
            id='zipcode'
            required
            value={zipcode}
            onChange={(event) => setZipcode(event.target.value)}
          />
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <button className='submitRegisterButton' type='submit'>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default FFRegister
