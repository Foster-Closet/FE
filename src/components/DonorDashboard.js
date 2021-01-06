import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const DonorDashboard = ({ auth }) => {
  const [requestList, setRequestList] = useState([])

  useEffect(() => {
    axios
      .get('https://foster-closet.herokuapp.com/api/registry/', {
        auth: auth
      })
      .then((response) => {
        setRequestList(response.data)
      })
  }, [auth])

  //Need to make sure this doesn't delete FF registry
  const deleteRegistry = (registryToDelete) => {
    axios
      .delete(
        `https://foster-closet.herokuapp.com/api/registry/${registryToDelete.id}`,
        { auth: auth }
      )
      .then((response) => {
        setRequestList(
          requestList.filter(
            (currentRegistry) => currentRegistry.id !== registryToDelete.id
          )
        )
      })
  }

  if (!auth) {
    return <Redirect to='/donor-login' />
  }


  return (
    <div className='DonorDashboard'>
      <h1>Welcome to The Virtual Foster Closet!</h1>
      <h2>Helping our community</h2>
      <div>
        <h1>Requested Items</h1>
        {requestList.map((item) => (
          <div key={item.id}>
            Item:{item.id}
            <ul>
              {item.items.map((sub) => (
                <li key={sub.id}>{sub.description}</li>
              ))}
              <button>
                <Link
                  to='/messaging'>Send
                </Link>
              </button>
            </ul>
            <Button color='secondary' onClick={() => deleteRegistry(item)}>
              Delete Registry
            </Button>
          </div>
        ))}
      </div>
    </div >
  )
}

export default DonorDashboard
