import React, { useState } from 'react'

const TeenageShoesDropdown = ({ handleItems, multiSelect = false }) => {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState([])
  const toggle = () => setOpen(!open)

  const items = [
    {
      id: 120,
      value: 'Socks'
    },
    {
      id: 121,
      value: '6'
    },
    {
      id: 122,
      value: '6.5'
    },
    {
      id: 123,
      value: '7'
    },
    {
      id: 124,
      value: '7.5'
    },
    {
      id: 125,
      value: '8'
    },
    {
      id: 126,
      value: '8.5'
    },
    {
      id: 127,
      value: '9'
    },
    {
      id: 128,
      value: '9.5'
    },
    {
      id: 129,
      value: '10'
    },
    {
      id: 130,
      value: '10.5'
    },
    {
      id: 131,
      value: '11'
    },
    {
      id: 132,
      value: '11.5'
    },
    {
      id: 133,
      value: '12'
    },
    {
      id: 134,
      value: '13'
    },
    {
      id: 135,
      value: '14+'
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
            Teenage Shoes (13-18 Years Old){' '}
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

export default TeenageShoesDropdown
