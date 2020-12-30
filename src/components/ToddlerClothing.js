import React, { useState } from 'react'

const ToddlerClothingDropdown = ({ handleItems, multiSelect = false }) => {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState([])
  const toggle = () => setOpen(!open)

  const items = [
    {
      id: 66,
      value: '2T Shirts'
    },
    {
      id: 67,
      value: '2T Shoes'
    },
    {
      id: 68,
      value: '2T Socks'
    },
    {
      id: 69,
      value: '2T Pants'
    },
    {
      id: 70,
      value: '2T Hats'
    },
    {
      id: 71,
      value: '3T Shirts'
    },
    {
      id: 72,
      value: '3T Shoes'
    },
    {
      id: 73,
      value: '3T Socks'
    },
    {
      id: 74,
      value: '3T Pants'
    },
    {
      id: 75,
      value: '3T Hats'
    },
    {
      id: 76,
      value: '4T Shirts'
    },
    {
      id: 77,
      value: '4T Shoes'
    },
    {
      id: 78,
      value: '4T Socks'
    },
    {
      id: 79,
      value: '4T Pants'
    },
    {
      id: 80,
      value: '4T Hats'
    },
    {
      id: 81,
      value: '5T Shirts'
    },
    {
      id: 82,
      value: '5T Shoes'
    },
    {
      id: 83,
      value: '5T Socks'
    },
    {
      id: 84,
      value: '5T Pants'
    },
    {
      id: 85,
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
            Toddler Clothing (2T-5T) <button>{open ? 'Close' : 'Open'}</button>
          </p>
        </div>
      </div>
      {open && (
        <ul className='dd-list'>
          {items.map((item) => (
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

export default ToddlerClothingDropdown
