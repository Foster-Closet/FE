import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const Dashboard = ({ auth, handleUnauthorized }) => {
  const [requestList, setRequestList] = useState([])

  useEffect(() => {
    axios
      .get('https://foster-closet.herokuapp.com/api/registry/', {
        headers: { Authorization: `Token ${auth}` }
      })
      .then((response) => {
        setRequestList(response.data)
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          handleUnauthorized()
        }
      })
  }, [auth, handleUnauthorized])

  const deleteRegistry = (registryToDelete) => {
    axios
      .delete(
        `https://foster-closet.herokuapp.com/api/registry/${registryToDelete.id}`,
        { headers: { Authorization: `Token ${auth}` } }
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
    return <Redirect to='/login' />
  }

  return (
    <div className='Dashboard pa5 ph10 ba br3 fl'>
      <h1 className='underline flex justify-center mh2 mv3'>
        Welcome to The Virtual Foster Closet!
      </h1>
      <h2 className='flex justify-center h2 ma3 pv2 pa1 ph3'>
        It takes a village to raise a child!
      </h2>
      <h2 className='flex justify-center h2 ma3 pv1 pa1 ph3'>
        If you are in need of resources for your foster child, please create a
        list below
      </h2>
      <center>
        <Button color='primary' href='/create-request'>
          Create a Request
        </Button>
      </center>
      <div>
        {requestList.map((item) => (
          <div className='mh2 mv3 b--solid br2' key={item.id}>
            <a href={`/request/${item.id}/donate`}>{item.id}</a>
            <ul className='mh2 mv3 br2'>
              {item.items.map((sub) => (
                <li key={sub.id}>{sub.description}</li>
              ))}
            </ul>
            <div>
              <Button color='primary' href={`/request/${item.id}/update`}>
                Update Request
              </Button>
            </div>
            <div>
              <Button color='secondary' onClick={() => deleteRegistry(item)}>
                Delete Request
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}
export default Dashboard
