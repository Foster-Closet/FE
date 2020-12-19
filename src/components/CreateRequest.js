import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const CreateRequest = ({ auth }) => {
  const [itemInList, setItemInList] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    axios
      .post(
        'https://foster-closet.herokuapp.com/api/registry/',
        { items: [{ description: itemInList }] },
        { headers: { Authorization: `Token ${auth}` } }
      )
      .then((response) => {
        setSubmitted(true)
      })
  }

  if (submitted) {
    return <Redirect to='/foster-family-dashboard' />
  }

  return (
    <div className='CreateRequest'>
      <h2>Create a request for you foster child here</h2>
      <div>
        <label>
          <input
            type='checkbox'
            value='stroller'
            checked={itemInList === 'stroller'}
            onChange={(e) => {
              setItemInList(e.target.value)
            }}
          />
          Stroller
        </label>
      </div>
      <div>
        <label>
          <input
            type='checkbox'
            value='car seat'
            checked={itemInList === 'car seat'}
            onChange={(e) => {
              setItemInList(e.target.value)
            }}
          />
          Car Seat
        </label>
      </div>
      <button onClick={handleSubmit}>Submit Request</button>
    </div>
  )
}

export default CreateRequest
