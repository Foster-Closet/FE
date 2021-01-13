import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect, useParams } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const OneRequest = ({ auth }) => {
  const { id } = useParams()
  const [requestList, setRequestList] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [sendDonorItems, setSendDonorItems] = useState([])

  useEffect(() => {
    axios
      .get(`https://foster-closet.herokuapp.com/api/registry/${id}`, {
        headers: { Authorization: `Token ${auth}` }
      })
      .then((response) => {
        setRequestList(response.data.items)
      })
  }, [auth, id])

  const chooseItems = (event, subId) => {
    if (event.target.checked === true) {
      const items = sendDonorItems
      items.push(subId)
      setSendDonorItems(items)
    } else {
      if (sendDonorItems.includes(subId)) {
        const items = sendDonorItems
        const index = items.indexOf(subId)
        if (index > -1) {
          items.splice(index, 1)
        }
      }
    }
  }

  const handleSubmit = () => {
    axios
      .post(
        'https://foster-closet.herokuapp.com/api/message/',
        {
          receiver: 20,
          message:
            'A donor wants to help with your requests! Please text 919-622-5322 to start your conversation'
        },
        {
          headers: { Authorization: `Token ${auth}` }
        }
      )
      .then((response) => {
        setSubmitted(true)
      })

      .catch((error) => {
        console.log(error)
      })
  }
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginBottom: 20
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  })

  const classes = useStyles()
  if (!auth) {
    return <Redirect to='/login' />
  }

  if (submitted) {
    return <Redirect to='/my-dashboard' />
  }

  return (
    <div className='ma10 pa2 ph10 fl w-100'>
      <center>
        <h2 className='pa2 f4 b'>Check Items You Can Provide</h2>
        <div className='tl mw6 pa3'>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='body2' component='p'>
                {requestList.map((item) => (
                  <div className='f4' key={item.id}>
                    <input
                      type='checkbox'
                      onClick={(event) => chooseItems(event, item.description)}
                    />{' '}
                    {item.description}
                  </div>
                ))}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <Button
          variant='contained'
          color='primary'
          onClick={handleSubmit}
        >
          Able to Donate
        </Button>
      </center>
    </div>
  )
}

export default OneRequest
