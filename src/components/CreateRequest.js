import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import ItemsToChoose from './ItemsToChoose'
import Button from '@material-ui/core/Button'

const CreateRequest = ({ auth }) => {
  const [submitted, setSubmitted] = useState(false)
  const [items, setItems] = useState([])

  const handleSubmit = () => {
    const newItems = items.map((item) => {
      let itemObj
      if (item.value === 'Other') {
        itemObj = { description: item.details }
      } else {
        itemObj = { description: item.value + ' ' + item.details }
      }
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
        <ItemsToChoose title='Items to choose' handleItems={handleItems} />
      </div>
      <Button color='primary' onClick={handleSubmit}>
        Submit Request
      </Button>
    </div>
  )
}

export default CreateRequest
