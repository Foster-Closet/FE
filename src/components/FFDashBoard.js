import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

const FFDashboard = ({ auth }) => {
  const [requestList, setRequestList] = useState([])

  useEffect(() => {
    axios
      .get('https://foster-closet.herokuapp.com/api/registry', {
        auth: auth
      })
      .then((response) => {
        setRequestList(response.data)
      })
  }, [auth])

  if (!auth) {
    return <Redirect to='/foster-family-login' />
  }

  return (
    <div className='FFDashboard'>
      <Link to='/create-request'>Create a Request</Link>
      <h2>Helping our community</h2>
      <a href='/create-request'>Create a Request</a>
      {requestList.map((items) => (
        <div key={items.id}>
          <h4>{items.itemInList}</h4>
        </div>
      ))}
    </div>
  )
}

export default FFDashboard
