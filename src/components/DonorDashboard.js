import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const DonorDashboard = ({ auth }) => {
  const [requestList, setRequestList] = useState([])

  useEffect(() => {
    axios
      .get('', {
        auth: auth
      })
      .then((response) => {
        setRequestList(response.data)
      })
  }, [auth])

  if (!auth) {
    return <Redirect to='/donor-login' />
  }

  return (
    <div className='DonorDashboard'>
      <h1>Welcome to your Virtual Foster Closet!</h1>
      <h2>Helping our community</h2>
    </div>
  )
}

export default DonorDashboard
