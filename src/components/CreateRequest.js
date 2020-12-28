import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import TravelEquipmentDropdown from './TravelEquipment'
import FeedingEquipmentDropdown from './FeedingEquipment'

const CreateRequest = ({ auth, items }) => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    axios
      .post(
        'https://foster-closet.herokuapp.com/api/registry/',
        { items: [{ description: TravelEquipmentDropdown.selection }] },
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
        <TravelEquipmentDropdown
          title='Travel Equipment'
          items={items}
          multiSelect
        />
        <FeedingEquipmentDropdown
          title='Feeding Equipment'
          items={items}
          multiSelect
        />
      </div>
      <button onClick={handleSubmit}>Submit Request</button>
    </div>
  )
}

export default CreateRequest
