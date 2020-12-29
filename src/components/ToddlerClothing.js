import React, { useState } from 'react'

const ToddlerClothingDropdown = ({ multiSelect = false }) => {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState([])
  const toggle = () => setOpen(!open)

  const items = [
    {
      id: 1,
      value: '2T Shirts'
    },
    {
      id: 2,
      value: '2T Shoes'
    },
    {
      id: 3,
      value: '2T Socks'
    },
    {
      id: 4,
      value: '2T Pants'
    },
    {
      id: 5,
      value: '2T Hats'
    },
    {
      id: 6,
      value: '3T Shirts'
    },
    {
      id: 7,
      value: '3T Shoes'
    },
    {
      id: 8,
      value: '3T Socks'
    },
    {
      id: 9,
      value: '3T Pants'
    },
    {
      id: 10,
      value: '3T Hats'
    },
    {
      id: 11,
      value: '4T Shirts'
    },
    {
      id: 12,
      value: '4T Shoes'
    },
    {
      id: 13,
      value: '4T Socks'
    },
    {
      id: 14,
      value: '4T Pants'
    },
    {
      id: 15,
      value: '4T Hats'
    },
    {
      id: 16,
      value: '5T Shirts'
    },
    {
      id: 17,
      value: '5T Shoes'
    },
    {
      id: 18,
      value: '5T Socks'
    },
    {
      id: 19,
      value: '5T Pants'
    },
    {
      id: 20,
      value: '5T Hats'
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
          <p>Toddler Clothing (2T-5T)</p>
        </div>
        <div className='dd-header-action'>
          <p>{open ? 'Close' : 'Open'}</p>
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

export default ToddlerClothingDropdown
