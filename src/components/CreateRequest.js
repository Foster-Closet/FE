import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const CreateRequest = ({ auth }) => {
  const [itemInList, setItemInList] = useState([])
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    axios
      .post(
        'https://foster-closet.herokuapp.com/api/item',
        {
          itemInList
        },
        { auth }
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
      <label>
        <input
          type='radio'
          id='itemName'
          name='stroller'
          value={itemInList}
          onChange={(e) => {
            setItemInList(e.target.value)
          }}
        />
        Stroller
      </label>
      <button onClick={handleSubmit}>Submit Request</button>
    </div>
  )
}

export default CreateRequest
