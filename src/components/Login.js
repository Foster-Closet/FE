import React, { useState } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

const Login = ({ auth, onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .post('https://foster-closet.herokuapp.com/auth/token/login/', {
        username,
        password
      })
      .then((response) => {
        onLogin(response.data.auth_token)
      })
      .catch((error) => {
        console.log(error)
      })
      .then((response) => {
        setSubmitted(true)
      })
  }

  if (submitted) {
    return <Redirect to='/my-dashboard' />
  }

  return (
    <div className='Login pa4 ma5 ba bw2 br3 b--washed-blue bg-lightest-blue'>
      <center>
        <h3 className=''>
          Log In or <Link to='/register'>Register</Link>
        </h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username' />
            <input
              required
              type='text'
              placeholder='Enter Username'
              id='username'
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor='password' />
            <input
              required
              type='password'
              placeholder='Enter Password'
              id='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <button className='submitLoginButton ,' type='submit'>
              Log In
            </button>
          </div>
        </form>
      </center>
    </div>
  )
}

export default Login
