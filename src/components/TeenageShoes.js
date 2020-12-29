import React, { useState } from 'react'

const TeenageShoesDropdown = ({ multiSelect = false }) => {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState([])
  const toggle = () => setOpen(!open)

  const items = [
    {
      id: 1,
      value: 'Socks'
    },
    {
      id: 2,
      value: '6'
    },
    {
      id: 3,
      value: '6.5'
    },
    {
      id: 4,
      value: '7'
    },
    {
      id: 5,
      value: '7.5'
    },
    {
      id: 6,
      value: '8'
    },
    {
      id: 7,
      value: '8.5'
    },
    {
      id: 8,
      value: '9'
    },
    {
      id: 9,
      value: '9.5'
    },
    {
      id: 10,
      value: '10'
    },
    {
      id: 11,
      value: '10.5'
    },
    {
      id: 12,
      value: '11'
    },
    {
      id: 13,
      value: '11.5'
    },
    {
      id: 14,
      value: '12'
    },
    {
      id: 15,
      value: '13'
    },
    {
      id: 16,
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
          <p>Teenage Shoes (13-18 Years Old)</p>
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

export default TeenageShoesDropdown
