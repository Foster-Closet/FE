import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'


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
    return <Redirect to='/foster-family-login' />
  }

  return (
    <div className='FFDashboard'>
      <Button color='primary' href='/create-request'>
        Create a Request
      </Button>
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
              <Button color='primary' href={`/request/${item.id}/update`}>
                Update this request
              </Button>
            </div>
            <div>
              <Button color='secondary' onClick={() => deleteRegistry(item)}>
                Delete Registry
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FFDashboard
