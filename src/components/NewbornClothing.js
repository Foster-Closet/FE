import React, { useState } from 'react'

const NewbornClothingDropdown = ({ multiSelect = false }) => {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState([])
  const toggle = () => setOpen(!open)

  const items = [
    {
      id: 1,
      value: 'Newborn Shirts'
    },
    {
      id: 2,
      value: 'Newborn Onesies'
    },
    {
      id: 3,
      value: 'Newborn Shoes'
    },
    {
      id: 4,
      value: 'Newborn Socks'
    },
    {
      id: 5,
      value: 'Newborn Pants'
    },
    {
      id: 6,
      value: 'Newborn Hats'
    },
    {
      id: 7,
      value: '0-3 Months Shirts'
    },
    {
      id: 8,
      value: '0-3 Months Onesies'
    },
    {
      id: 9,
      value: '0-3 Months Shoes'
    },
    {
      id: 10,
      value: '0-3 Months Socks'
    },
    {
      id: 11,
      value: '0-3 Months Pants'
    },
    {
      id: 12,
      value: '0-3 Months Hats'
    },
    {
      id: 13,
      value: '3-6 Months Shirts'
    },
    {
      id: 14,
      value: '3-6 Months Onesies'
    },
    {
      id: 15,
      value: '3-6 Months Shoes'
    },
    {
      id: 16,
      value: '3-6 Months Socks'
    },
    {
      id: 17,
      value: '3-6 Months Pants'
    },
    {
      id: 18,
      value: '3-6 Months Hats'
    },
    {
      id: 19,
      value: '6-9 Months Shirts'
    },
    {
      id: 20,
      value: '6-9 Months Onesies'
    },
    {
      id: 21,
      value: '6-9 Months Shoes'
    },
    {
      id: 22,
      value: '6-9 Months Socks'
    },
    {
      id: 23,
      value: '6-9 Months Pants'
    },
    {
      id: 24,
      value: '6-9 Months Hats'
    },
    {
      id: 25,
      value: '12 Months Shirts'
    },
    {
      id: 26,
      value: '12 Months Onesies'
    },
    {
      id: 27,
      value: '12 Months Shoes'
    },
    {
      id: 28,
      value: '12 Months Socks'
    },
    {
      id: 29,
      value: '12 Months Pants'
    },
    {
      id: 30,
      value: '12 Months Hats'
    },
    {
      id: 31,
      value: '18 Months Shirts'
    },
    {
      id: 32,
      value: '18 Months Onesies'
    },
    {
      id: 33,
      value: '18 Months Shoes'
    },
    {
      id: 34,
      value: '18 Months Socks'
    },
    {
      id: 35,
      value: '18 Months Pants'
    },
    {
      id: 36,
      value: '18 Months Hats'
    },
    {
      id: 37,
      value: '24 Months Shirts'
    },
    {
      id: 38,
      value: '24 Months Onesies'
    },
    {
      id: 39,
      value: '24 Months Shoes'
    },
    {
      id: 40,
      value: '24 Months Socks'
    },
    {
      id: 41,
      value: '24 Months Pants'
    },
    {
      id: 42,
      value: '24 Months Hats'
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
          <p>Newborn Clothing (0-24 Months)</p>
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

export default NewbornClothingDropdown
