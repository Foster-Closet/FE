import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect, useParams } from 'react-router-dom'
import ItemsToChoose from './ItemsToChoose'
import Button from '@material-ui/core/Button'

const UpdateRequest = ({ auth }) => {
  const { id } = useParams()
  const [requestList, setRequestList] = useState([])
  const [items, setItems] = useState([])
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    axios
      .get(`https://foster-closet.herokuapp.com/api/registry/${id}`, {
        headers: { Authorization: `Token ${auth}` }
      })
      .then((response) => {
        setRequestList(response.data.items)
      })
  }, [auth, id])

  const handleSubmit = () => {
    const newItems = items.map((item) => {
      const itemObj = { description: item.value + ' ' + item.details }
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
          headers: { Authorization: `Token ${auth}` }
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
    return <Redirect to='/login' />
  }

  if (submitted) {
    return <Redirect to='/my-dashboard' />
  }

  return (
    <div className='UpdateRequest'>
      <div>
        <h2>Update your requested list below</h2>
        {requestList.map((item) => (
          <div key={item.id}>
            <ul>
              {item.description}
              <Button
                color='secondary'
                onClick={() => deleteItemsInRegistry(item)}
              >
                Delete
              </Button>
            </ul>
          </div>
        ))}
      </div>
      <div>
        <ItemsToChoose chosenItems={items} setChosenItems={setItems} />
      </div>
      <Button color='primary' onClick={handleSubmit}>
        Update Request
      </Button>
    </div>
  )
}

export default UpdateRequest
