import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect, Link, useParams } from 'react-router-dom'

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

  function deleteRegistry(registryToDelete) {
    console.log({ registryToDelete })
    axios.
      delete(`https://foster-closet.herokuapp.com/api/registry/${registryToDelete.id}`, {
        auth: auth
      })
      .then(response => {
        setRequestList(requestList.filter(currentRegistry => (
          currentRegistry.id !== registryToDelete.id)
        ))
      })
  }



  if (!auth) {
    return <Redirect to='/foster-family-login' />
  }

  return (
    <div className='FFDashboard'>
      <h1>Helping our community</h1>
      <Link to='/create-request'>Create a Request </Link>
      <div>
        <h1>My Requested List</h1>
        {requestList.map((item) => (
          <div key={item.id}>
            Requested list {item.id}
            <ul>
              {item.items.map((sub) => (
                <li key={sub.id}>{sub.description}</li>
              ))}
            </ul>
            <div>
              <button onClick={() => deleteRegistry(item)}>Delete Registry</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FFDashboard
