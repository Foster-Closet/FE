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

  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .post('https://foster-closet.herokuapp.com/api/user', {
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
      // .then(() => {
      //   return <Redirect to='/FosterFamilyAuth' />
      // })
      .catch((error) => {
        console.log(error)
      })
  }

  if (auth) {
    return <Redirect to='/' />
  }

  return (
    <div className='Register'>
      <h1>
        Sign Up or <Link to='/login'>Login</Link>
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
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
            value={zipcode}
            onChange={(event) => setZipcode(event.target.value)}
          />
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
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

export default Register
