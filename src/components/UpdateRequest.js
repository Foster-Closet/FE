import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect, useParams } from 'react-router-dom'
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

const UpdateRequest = ({ auth }) => {
  const { id } = useParams()
  const [requestList, setRequestList] = useState([])
  const [items, setItems] = useState([])
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    axios
      .get('https://foster-closet.herokuapp.com/api/registry/', {
        auth: auth
      })
      .then((response) => {
        setRequestList(response.data)
      })
  }, [auth, id])

  const handleSubmit = () => {
    const newItems = items.map((item) => {
      const itemObj = { description: item.value }
      return itemObj
    })
    axios
      .put(
        `https://foster-closet.herokuapp.com/api/registry/${id}`,
        { items: newItems },
        { headers: { Authorization: `Token ${auth}` } }
      )
      .then((response) => {
        setSubmitted(true)
      })
  }

  const deleteItemsInRegistry = (itemToDelete) => {
    axios
      .delete(
        `https://foster-closet.herokuapp.com/api/item/${itemToDelete.id}`,
        {
          auth: auth
        }
      )
      .then((response) => {
        setRequestList(
          requestList.filter(
            (currentRegistry) => currentRegistry.id !== itemToDelete.id
          )
        )
      })
  }

  if (!auth) {
    return <Redirect to='/foster-family-login' />
  }

  if (submitted) {
    return <Redirect to='/foster-family-dashboard' />
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

  return (
    <div className='UpdateRequest'>
      <div>
        {requestList.map((item) => (
          <div key={item.id}>
            Requested list {item.id}
            <ul>
              {item.items.map((sub) => (
                <li key={sub.id}>
                  {sub.description}{' '}
                  <Button
                    color='secondary'
                    onClick={() => deleteItemsInRegistry(sub)}
                  >
                    Delete
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <h2>
        Choose the items you wish to add to this request from the list below
      </h2>
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
        Update Request
      </Button>
    </div>
  )
}

export default UpdateRequest
