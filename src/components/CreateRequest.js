import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import ItemsToChoose from './ItemsToChoose'
import Button from '@material-ui/core/Button'

const CreateRequest = ({ auth, chosenItems }) => {
  const [submitted, setSubmitted] = useState(false)
  const [items, setItems] = useState([])
  const [timeNeeded, setTimeNeeded] = useState(null)

  const handleSubmit = () => {
    const newItems = items.map((item) => {
      const itemObj = {
        description: item.value + ': ' + item.details + ': ' + timeNeeded
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

  if (submitted) {
    return <Redirect to='/my-dashboard' />
  }

  return (
    <div className='CreateRequest'>
      <div>
        <ItemsToChoose
          chosenItems={items}
          setChosenItems={setItems}
          setTimeNeeded={setTimeNeeded}
          timeNeeded={timeNeeded}
        />
      </div>
      <Button color='primary' onClick={handleSubmit}>
        Submit Request
      </Button>
    </div>
  )
}

export default CreateRequest
