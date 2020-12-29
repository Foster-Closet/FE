import React, { useState } from 'react'

const TeenageClothingDropdown = ({ multiSelect = false }) => {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState([])
  const toggle = () => setOpen(!open)

  const items = [
    {
      id: 1,
      value: 'Extra Small Shirts'
    },
    {
      id: 2,
      value: 'Extra Small Shoes'
    },
    {
      id: 3,
      value: 'Extra Small Socks'
    },
    {
      id: 4,
      value: 'Extra Small Pants'
    },
    {
      id: 5,
      value: 'Small Shirts'
    },
    {
      id: 6,
      value: 'Small Shoes'
    },
    {
      id: 7,
      value: 'Small Socks'
    },
    {
      id: 8,
      value: 'Small Pants'
    },
    {
      id: 9,
      value: 'Hats'
    },
    {
      id: 10,
      value: 'Medium Shirts'
    },
    {
      id: 11,
      value: 'Medium Shoes'
    },
    {
      id: 12,
      value: 'Medium Socks'
    },
    {
      id: 13,
      value: 'Medium Pants'
    },
    {
      id: 14,
      value: 'Large Shirts'
    },
    {
      id: 15,
      value: 'Large Shoes'
    },
    {
      id: 16,
      value: 'Large Socks'
    },
    {
      id: 17,
      value: 'Large Pants'
    },
    {
      id: 18,
      value: 'Extra Large Shirts'
    },
    {
      id: 19,
      value: 'Extra Large Shoes'
    },
    {
      id: 20,
      value: 'Extra Large Socks'
    },
    {
      id: 21,
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
          <p>Teenage Clothing (13-18 Years Old)</p>
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

export default TeenageClothingDropdown
