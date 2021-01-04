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
import Button from '@material-ui/core/Button'

const CreateRequest = ({ auth }) => {
  const [submitted, setSubmitted] = useState(false)
  const [items, setItems] = useState([])

  const handleSubmit = () => {
    const newItems = items.map((item) => {
      const itemObj = { description: item.value }
      return itemObj
    })
    axios
      .post(
        'https://foster-closet.herokuapp.com/api/registry/',
        { items: newItems },
        { headers: { Authorization: `Token ${auth}` } }
      )
      .then((response) => {
        setSubmitted(true)
      })
  }

  const handleItems = (item) => {
    if (!items.some((current) => current.id === item.id)) {
      setItems([...items, item])
    } else {
      let itemsAfterRemoval = items
      itemsAfterRemoval = itemsAfterRemoval.filter(
        (current) => current.id !== item.id
      )
      setItems([...itemsAfterRemoval])
    }
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
          multiSelect
          handleItems={handleItems}
        />
        <FeedingEquipmentDropdown
          title='Feeding Equipment'
          handleItems={handleItems}
          multiSelect
        />
        <BedroomBathroomDropdown
          title='Bedroom/Bathroom'
          handleItems={handleItems}
          multiSelect
        />
        <ToysDropdown
          title='Toys/Entertainment'
          handleItems={handleItems}
          multiSelect
        />
        <DiapersDropdown
          title='Diapers/Changing'
          handleItems={handleItems}
          multiSelect
        />
        <NewbornClothingDropdown
          title='Newborn Clothing'
          handleItems={handleItems}
          multiSelect
        />
        <ToddlerClothingDropdown
          title='Toddler Clothing'
          handleItems={handleItems}
          multiSelect
        />
        <YouthClothingDropdown
          title='Youth Clothing'
          handleItems={handleItems}
          multiSelect
        />
        <YouthShoesDropdown
          title='Youth Shoes'
          handleItems={handleItems}
          multiSelect
        />
        <TeenageClothingDropdown
          title='Teenage Clothing'
          handleItems={handleItems}
          multiSelect
        />
        <TeenageShoesDropdown
          title='Teenage Shoes'
          handleItems={handleItems}
          multiSelect
        />
      </div>
      <Button color='primary' onClick={handleSubmit}>
        Submit Request
      </Button>
    </div>
  )
}

export default CreateRequest
