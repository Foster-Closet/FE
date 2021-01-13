import CreatableSelect from 'react-select/creatable'
import React from 'react'
import produce from 'immer'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const ItemsToChoose = ({ chosenItems, setChosenItems }) => {
  const handleChange = (newValue, actionMeta) => {
    console.group('Value Changed')
    console.groupEnd()
    if (
      actionMeta.action === 'select-option' ||
      actionMeta.action === 'create-option'
    ) {
      addItem(newValue.value)
    }
  }

  const handleInputChange = (newValue, actionMeta) => {
    console.group('Input Changed')
    console.groupEnd()
  }

  const addItem = (item) => {
    const newItems = produce(chosenItems, (draftItems) => {
      draftItems.push({ value: item, details: '' })
      return draftItems
    })
    setChosenItems(newItems)
  }

  const deleteItem = (itemIdx) => {
    const newItems = produce(chosenItems, (draftItems) => {
      draftItems.splice(itemIdx, 1)
      return draftItems
    })
    setChosenItems(newItems)
  }

  const updateDetails = (itemIdx, details) => {
    const newItems = produce(chosenItems, (draftItems) => {
      draftItems[itemIdx].details = details
      return draftItems
    })
    setChosenItems(newItems)
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

  return (
    <center>
      <div className='pa4'>
        <CreatableSelect
          isClearable
          onChange={handleChange}
          onInputChange={handleInputChange}
          placeholder='Ex: 3T Onsie, Rear Facing Car Seat, Changing Table'
        />
        {chosenItems.length > 0 && (
          <div className='pa1'>
            {chosenItems.map((item, idx) => (
              <Card className={classes.root} key={item.value}>
                <CardContent>
                  <Typography variant='body2' component='p'>
                    <div key={idx}>
                      <div>
                        <h3 className='f4'>
                          {item.value}
                        </h3>
                        <Button
                          color='secondary'
                          onClick={() => deleteItem(idx)}
                        >Remove
                        </Button>
                      </div>

                      <div>
                        <input
                          type='text'
                          value={item.details}
                          onChange={(e) => updateDetails(idx, e.target.value)}
                          placeholder='Enter any details'
                        />
                      </div>
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </center>
  )
}

export default ItemsToChoose
