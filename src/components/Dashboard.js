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
    <div className='Dashboard pa5 ph10 ba br3 fl w-100 gold bg-lightest-blue'>
      <h1 className='underline flex justify-center mh2 mv3'>
        Welcome to The Virtual Foster Closet!
      </h1>
      <h2 className='flex justify-center h2 ma3 pv2 pa1 ph3'>
        It takes a village to raise a child!
      </h2>
      <h2 className='flex justify-center h2 ma3 pv1 pa1 ph3'>
        Thank You for your support!
      </h2>
      <center>
        <Button color='primary' href='/create-request'>
          Create a Request
        </Button>
      </center>
      <div>
        {requestList.map((item) => (
          <div
            className='white flex grow justify-left mh2 mv3 b--solid b--yellow br2'
            key={item.id}
          >
            <Link to='/OneRequest'>{item.id}</Link>
            <ul className='mh2 mv3 b--yellow br2'>
              {item.items.map((sub) => (
                <li
                  className='flex justify-left mh2 mv3 b--yellow br2'
                  key={sub.id}
                >
                  {sub.description}
                </li>
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
