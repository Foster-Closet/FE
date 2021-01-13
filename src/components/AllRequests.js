import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const AllRequests = ({ auth, handleUnauthorized }) => {
  const [requestList, setRequestList] = useState([])

  useEffect(() => {
    axios
      .get('https://foster-closet.herokuapp.com/api/registry/all/', {
        headers: { Authorization: `Token ${auth}` }
      })
      .then((response) => {
        setRequestList(response.data)
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          handleUnauthorized()
        }
      })
  }, [auth, handleUnauthorized])
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
  return (
    <div className='ma10 pa2 ph10 fl w-100'>
      <center>
        <h1 className='flex justify-center mw6'>All Requested Lists</h1>
        <h2 className='f4 b flex justify-center mw6'>Select a list you want to donate to</h2>
      </center>
      <center>
        <div className='center pa3 mr3 ma5 w-50'>
          {requestList.map((item) => (
            <Card className={classes.root} key={item.CardContentuser}>
              <CardContent>
                <Typography variant='body2' component='p'>
                  <div className='f4 b pa1 mh2 ba b--light-blue b--solid br3' key={item.user}>
                    <a href={`/request/${item.id}`}>{item.user}</a>
                    <ul className='f4 mh2 mv3 br2'>
                      {item.items.map((sub) => (
                        <li key={sub.id}>{sub.description}</li>
                      ))}
                    </ul>
                  </div>
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </center>
    </div>
  )
}

export default AllRequests
