import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'


const FFDashboard = ({ auth }) => {
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

  const deleteRegistry = (registryToDelete) => {
    axios
      .delete(
        `https://foster-closet.herokuapp.com/api/registry/${registryToDelete.id}`,
        {
          auth: auth
        }
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
    return <Redirect to='/foster-family-login' />
  }

  return (
    <div className='FFDashboard'>
      <Link to='/create-request'>Create a Request </Link>
      <div>
        {requestList.map((item) => (
          <div key={item.id}>
            Requested list {item.id}
            <ul>
              {item.items.map((sub) => (
                <li key={sub.id}>{sub.description}</li>
              ))}
            </ul>
            <div>
              <button onClick={() => deleteRegistry(item)}>
                Delete Registry
              </button>
              <button><Link to='/chat'>Open Chat</Link></button>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FFDashboard
