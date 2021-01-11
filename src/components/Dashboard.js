import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'

const Dashboard = ({ auth, handleUnauthorized }) => {
  const [requestList, setRequestList] = useState([])

  useEffect(() => {
    axios
      .get('https://foster-closet.herokuapp.com/api/registry/', {
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

  const deleteRegistry = (registryToDelete) => {
    axios
      .delete(
        `https://foster-closet.herokuapp.com/api/registry/${registryToDelete.id}`,
        { headers: { Authorization: `Token ${auth}` } }
      )
      .then((response) => {
        setRequestList(
          requestList.filter(
            (currentRegistry) => currentRegistry.id !== registryToDelete.id
          )
        )
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

  return (
    <div className='ma10 pa5 ph10 ba br3 fl w-100 bg-washed-blue'>
      <center>
        <Button variant='contained' color='primary' href='/create-request'>
          Create a Request
        </Button>
      </center>
      <div className='center pa3 mr3 ma5 w-100'>
        {requestList.map((item) => (
          <Card className={classes.root} key={item.id}>
            <CardActionArea>
              <CardContent>
                <Typography variant='body2' component='p'>
                  <div
                    className='flex pa1 mh2 ba b--gray b--solid br3'
                    key={item.id}
                  >
                    <ul className='mh1 mv3 br2'>
                      {item.items.map((sub) => (
                        <li className='flex mh1 mv3 br2' key={sub.id}>
                          {sub.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size='small'
                variant='contained'
                color='primary'
                href={`/request/${item.id}/update`}
              >
                Update Request
              </Button>
              <Button
                size='small'
                variant='contained'
                color='secondary'
                onClick={() => deleteRegistry(item)}
              >
                Delete Request
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  )
}
export default Dashboard
