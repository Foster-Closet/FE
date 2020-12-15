import React, { useState } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

const FFLogin = ({ auth, onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .get('https://foster-closet.herokuapp.com/api/user', {
        auth: { username: username, password: password }
      })
      .then((response) => {
        onLogin({ username, password })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  if (auth) {
    return <Redirect to='/foster-family-dashboard' />
  }

  return (
    <div className='Login'>
      <center>
        <h3>
          Log In or <Link to='/foster-family-register'>Register</Link>
        </h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username</label>
            <input
              required
              type='text'
              id='username'
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              required
              type='password'
              id='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <button className='submitLoginButton' type='submit'>
              Log In
            </button>
          </div>
        </form>
      </center>
    </div>
  )
}

export default FFLogin
