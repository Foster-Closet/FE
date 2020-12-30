import React, { useState } from 'react'

const TeenageClothingDropdown = ({ handleItems, multiSelect = false }) => {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState([])
  const toggle = () => setOpen(!open)

  const items = [
    {
      id: 110,
      value: 'Extra Small Shirts'
    },
    {
      id: 111,
      value: 'Extra Small Pants'
    },
    {
      id: 112,
      value: 'Small Shirts'
    },
    {
      id: 113,
      value: 'Small Pants'
    },
    {
      id: 114,
      value: 'Medium Shirts'
    },
    {
      id: 115,
      value: 'Medium Pants'
    },
    {
      id: 116,
      value: 'Large Shirts'
    },
    {
      id: 117,
      value: 'Large Pants'
    },
    {
      id: 118,
      value: 'Extra Large Shirts'
    },
    {
      id: 119,
      value: 'Extra Large Pants'
    }
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
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className='dd-header-title'>
          <p>
            Teenage Clothing (13-18 Years Old){' '}
            <button>{open ? 'Close' : 'Open'}</button>
          </p>
        </div>
      </div>
      {open && (
        <ul className='dd-list'>
          {items.map((item) => (
            <li className='dd-list-item' key={item.id}>
              <button onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>{' '}
                <span>{isItemInSelection(item) && 'Selected'}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TeenageClothingDropdown
