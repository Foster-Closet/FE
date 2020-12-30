import React, { useState } from 'react'

const BedroomBathroomDropdown = ({ handleItems, multiSelect = false }) => {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState([])
  const toggle = () => setOpen(!open)

  const items = [
    {
      id: 51,
      value: 'Crib'
    },
    {
      id: 52,
      value: 'Sheets/Blankets'
    },
    {
      id: 53,
      value: 'Baby Monitor'
    },
    {
      id: 54,
      value: 'Towels'
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
            Bedroom & Bathroom <button>{open ? 'Close' : 'Open'}</button>
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

export default BedroomBathroomDropdown
