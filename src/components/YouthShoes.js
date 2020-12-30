import React, { useState } from 'react'

const YouthShoesDropdown = ({ handleItems, multiSelect = false }) => {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState([])
  const toggle = () => setOpen(!open)

  const items = [
    {
      id: 96,
      value: 'Socks'
    },
    {
      id: 97,
      value: '1'
    },
    {
      id: 98,
      value: '1.5'
    },
    {
      id: 99,
      value: '2'
    },
    {
      id: 100,
      value: '2.5'
    },
    {
      id: 101,
      value: '3'
    },
    {
      id: 102,
      value: '3.5'
    },
    {
      id: 103,
      value: '4'
    },
    {
      id: 104,
      value: '4.5'
    },
    {
      id: 105,
      value: '5'
    },
    {
      id: 106,
      value: '5.5'
    },
    {
      id: 107,
      value: '6'
    },
    {
      id: 108,
      value: '6.5'
    },
    {
      id: 109,
      value: '7'
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
            Youth Shoes (6-12 Years Old){' '}
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

export default YouthShoesDropdown
