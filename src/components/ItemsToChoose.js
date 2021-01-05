import React, { useState } from 'react'
import Button from '@material-ui/core/Button'

const Dropdown = ({ handleItems, multiSelect = false }) => {
  const [dropdown, setDropdown] = useState('')
  const [details, setDetails] = useState('')
  const [selection, setSelection] = useState([])
  const toggle = (value) => {
    if (value === dropdown) {
      setDropdown('')
    } else {
      setDropdown(value)
    }
  }

  const items = [
    { id: 1, value: 'Stroller', category: 'travel', details: details },
    { id: 2, value: 'Car Seat', category: 'travel', details: details },
    { id: 3, value: 'Other', category: 'travel', details: details },
    { id: 4, value: 'Baby Food', category: 'feeding', details: details },
    { id: 5, value: 'Formula', category: 'feeding', details: details },
    { id: 6, value: 'High Chair', category: 'feeding', details: details },
    { id: 7, value: 'Bibs', category: 'feeding', details: details },
    { id: 8, value: 'Bottles', category: 'feeding', details: details },
    { id: 10, value: 'Other', category: 'feeding', details: details },
    { id: 11, value: 'Baby Monitor', category: 'bedbath', details: details },
    { id: 12, value: 'Towels', category: 'bedbath', details: details },
    { id: 13, value: 'Blankets', category: 'bedbath', details: details },
    { id: 14, value: 'Crib', category: 'bedbath', details: details },
    { id: 15, value: 'Other', category: 'bedbath', details: details },
    { id: 16, value: 'Books', category: 'toys', details: details },
    { id: 17, value: 'Baby Safe Toys', category: 'toys', details: details },
    { id: 18, value: 'Todler Safe Toys', category: 'toys', details: details },
    { id: 19, value: 'Other', category: 'toys', details: details },
    { id: 20, value: 'Diapers', category: 'diapers', details: details },
    { id: 21, value: 'Changing Pads', category: 'diapers', details: details },
    { id: 22, value: 'Changing Table', category: 'diapers', details: details },
    { id: 23, value: 'Baby Wipes', category: 'diapers', details: details },
    { id: 24, value: 'Other', category: 'diapers', details: details },
    { id: 25, value: 'Shirts', category: 'clothing', details: details },
    { id: 26, value: 'Shorts', category: 'clothing', details: details },
    { id: 27, value: 'Pants', category: 'clothing', details: details },
    { id: 28, value: 'Other', category: 'clothing', details: details },
    { id: 29, value: 'Socks', category: 'shoes', details: details },
    { id: 30, value: 'Shoes', category: 'shoes', details: details },
    { id: 31, value: 'Other', category: 'shoes', details: details }
  ]

  const handleOnClick = (item) => {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item])
      } else if (multiSelect) {
        setSelection([...selection, item])
      }
    } else {
      let selectionAfterRemoval = selection
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      )
      setSelection([...selectionAfterRemoval])
    }
    handleItems(item)
  }

  const isItemInSelection = (item) => {
    if (selection.some((current) => current.id === item.id)) {
      return true
    }
    return false
  }

  return (
    <div className='dd-wrapper'>
      <div
        tabIndex={0}
        className='dd-header'
        role='button'
        onKeyPress={() => toggle('travel')}
        onClick={() => toggle('travel')}
      >
        <div className='dd-header-title'>
          <p>
            Travel Equipment{' '}
            <button>{dropdown === 'travel' ? 'Close' : 'Open'}</button>
          </p>
        </div>
      </div>
      {dropdown === 'travel' && (
        <ul className='dd-list'>
          {items
            .filter((item) => item.category === 'travel')
            .map((item) => (
              <li className='dd-list-item' key={item.id}>
                <button onClick={() => handleOnClick(item)}>
                  <span>
                    {item.value} {isItemInSelection(item) && 'Selected'}
                  </span>
                </button>
                <input type='text' />
              </li>
            ))}
          <Button color='secondary' onClick={() => setDetails(details)}>
            Save item details
          </Button>
        </ul>
      )}
      <div
        tabIndex={0}
        className='dd-header'
        role='button'
        onKeyPress={() => toggle('feeding')}
        onClick={() => toggle('feeding')}
      >
        <div className='dd-header-title'>
          <p>
            Feeding Equipment{' '}
            <button>{dropdown === 'feeding' ? 'Close' : 'Open'}</button>
          </p>
        </div>
      </div>
      {dropdown === 'feeding' && (
        <ul className='dd-list'>
          {items
            .filter((item) => item.category === 'feeding')
            .map((item) => (
              <li className='dd-list-item' key={item.id}>
                <button onClick={() => handleOnClick(item)}>
                  <span>
                    {item.value} {isItemInSelection(item) && 'Selected'}
                  </span>
                </button>
              </li>
            ))}
        </ul>
      )}
      <div
        tabIndex={0}
        className='dd-header'
        role='button'
        onKeyPress={() => toggle('bedbath')}
        onClick={() => toggle('bedbath')}
      >
        <div className='dd-header-title'>
          <p>
            Bedroom & Bathroom{' '}
            <button>{dropdown === 'bedbath' ? 'Close' : 'Open'}</button>
          </p>
        </div>
      </div>
      {dropdown === 'bedbath' && (
        <ul className='dd-list'>
          {items
            .filter((item) => item.category === 'bedbath')
            .map((item) => (
              <li className='dd-list-item' key={item.id}>
                <button onClick={() => handleOnClick(item)}>
                  <span>
                    {item.value} {isItemInSelection(item) && 'Selected'}
                  </span>
                </button>
              </li>
            ))}
        </ul>
      )}
      <div
        tabIndex={0}
        className='dd-header'
        role='button'
        onKeyPress={() => toggle('toys')}
        onClick={() => toggle('toys')}
      >
        <div className='dd-header-title'>
          <p>
            Toys <button>{dropdown === 'toys' ? 'Close' : 'Open'}</button>
          </p>
        </div>
      </div>
      {dropdown === 'toys' && (
        <ul className='dd-list'>
          {items
            .filter((item) => item.category === 'toys')
            .map((item) => (
              <li className='dd-list-item' key={item.id}>
                <button onClick={() => handleOnClick(item)}>
                  <span>
                    {item.value} {isItemInSelection(item) && 'Selected'}
                  </span>
                </button>
              </li>
            ))}
        </ul>
      )}
      <div
        tabIndex={0}
        className='dd-header'
        role='button'
        onKeyPress={() => toggle('diapers')}
        onClick={() => toggle('diapers')}
      >
        <div className='dd-header-title'>
          <p>
            Diapers & Changing Equipment{' '}
            <button>{dropdown === 'diapers' ? 'Close' : 'Open'}</button>
          </p>
        </div>
      </div>
      {dropdown === 'diapers' && (
        <ul className='dd-list'>
          {items
            .filter((item) => item.category === 'diapers')
            .map((item) => (
              <li className='dd-list-item' key={item.id}>
                <button onClick={() => handleOnClick(item)}>
                  <span>
                    {item.value} {isItemInSelection(item) && 'Selected'}
                  </span>
                </button>
              </li>
            ))}
        </ul>
      )}
      <div
        tabIndex={0}
        className='dd-header'
        role='button'
        onKeyPress={() => toggle('clothing')}
        onClick={() => toggle('clothing')}
      >
        <div className='dd-header-title'>
          <p>
            Clothing{' '}
            <button>{dropdown === 'clothing' ? 'Close' : 'Open'}</button>
          </p>
        </div>
      </div>
      {dropdown === 'clothing' && (
        <ul className='dd-list'>
          {items
            .filter((item) => item.category === 'clothing')
            .map((item) => (
              <li className='dd-list-item' key={item.id}>
                <button onClick={() => handleOnClick(item)}>
                  <span>
                    {item.value} {isItemInSelection(item) && 'Selected'}
                  </span>
                </button>
              </li>
            ))}
        </ul>
      )}
      <div
        tabIndex={0}
        className='dd-header'
        role='button'
        onKeyPress={() => toggle('shoes')}
        onClick={() => toggle('shoes')}
      >
        <div className='dd-header-title'>
          <p>
            Shoes <button>{dropdown === 'shoes' ? 'Close' : 'Open'}</button>
          </p>
        </div>
      </div>
      {dropdown === 'shoes' && (
        <ul className='dd-list'>
          {items
            .filter((item) => item.category === 'shoes')
            .map((item) => (
              <li className='dd-list-item' key={item.id}>
                <button onClick={() => handleOnClick(item)}>
                  <span>
                    {item.value} {isItemInSelection(item) && 'Selected'}
                  </span>
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
