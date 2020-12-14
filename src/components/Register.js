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
      .post('', {
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
  }

  if (auth) {
    return <Redirect to='/' />
  }

  return (
    <div className='Register'>
      <div></div>
    </div>
  )
}

export default Register
