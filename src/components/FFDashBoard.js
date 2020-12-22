import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

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

  if (!auth) {
    return <Redirect to='/foster-family-login' />
  }


  return (
    <div className='FFDashboard'>
      
      <h1>Helping our community</h1>
      <a href='/create-request'>Create a Request</a>
      <div>
        <h1>My Requested List</h1>
        {
          requestList.map((item) => 
              <div>Item:{item.id}
              <ul>
                {item.items.map((sub)=>
                <li>
                  {sub.description}
                </li>
                  )}
              </ul>
              </div>
          )
        }
        </div>
        )
      }
    

      </div>
  )
}

export default FFDashboard
