import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import TravelEquipmentDropdown from './TravelEquipment'
import FeedingEquipmentDropdown from './FeedingEquipment'
import BedroomBathroomDropdown from './BedroomBathroom'
import ToysDropdown from './Toys'
import DiapersDropdown from './Diapers'
import NewbornClothingDropdown from './NewbornClothing'
import ToddlerClothingDropdown from './ToddlerClothing'
import YouthClothingDropdown from './YouthClothing'
import YouthShoesDropdown from './YouthShoes'
import TeenageClothingDropdown from './TeenageClothing'
import TeenageShoesDropdown from './TeenageShoes'

const CreateRequest = ({ auth, items }) => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    axios
      .post(
        'https://foster-closet.herokuapp.com/api/registry/',
        {
          items: [
            {
              description: TravelEquipmentDropdown,
              FeedingEquipmentDropdown,
              BedroomBathroomDropdown,
              ToysDropdown,
              DiapersDropdown,
              NewbornClothingDropdown,
              ToddlerClothingDropdown,
              YouthClothingDropdown,
              TeenageClothingDropdown,
              YouthShoesDropdown,
              TeenageShoesDropdown
            }
          ]
        },
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
        <BedroomBathroomDropdown
          title='Bedroom/Bathroom'
          items={items}
          multiSelect
        />
        <ToysDropdown title='Toys/Entertainment' items={items} multiSelect />
        <DiapersDropdown title='Diapers/Changing' items={items} multiSelect />
        <NewbornClothingDropdown
          title='Newborn Clothing'
          items={items}
          multiSelect
        />
        <ToddlerClothingDropdown
          title='Toddler Clothing'
          items={items}
          multiSelect
        />
        <YouthClothingDropdown
          title='Youth Clothing'
          items={items}
          multiSelect
        />
        <YouthShoesDropdown title='Youth Shoes' items={items} multiSelect />
        <TeenageClothingDropdown
          title='Teenage Clothing'
          items={items}
          multiSelect
        />
        <TeenageShoesDropdown title='Teenage Shoes' items={items} multiSelect />
      </div>
      <button onClick={handleSubmit}>Submit Request</button>
    </div>
  )
}

export default CreateRequest
