import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import TransferList from './TravelEquipment'

const CreateRequest = ({ auth }) => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    axios
      .post(
        'https://foster-closet.herokuapp.com/api/registry/',
        { items: [{ description: TransferList }] },
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
        <TransferList />
      </div>
      <button onClick={handleSubmit}>Submit Request</button>
    </div>
  )
}

export default CreateRequest
