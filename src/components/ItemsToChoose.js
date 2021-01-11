import CreatableSelect from 'react-select/creatable'
import React from 'react'
import produce from 'immer'

const ItemsToChoose = ({ chosenItems, setChosenItems }) => {
  const defaultItems = [
    'Travel Supplies:" " ',
    'Feeding Supplies:" " ',
    'Toys:" "',
    'Bedroom Supplies:" " ',
    'Bathroom Supplies: " " ',
    'Clothing: " " ',
    'Shoes: " " '
  ].map((item) => ({
    value: item,
    label: item
  }))

  const handleChange = (newValue, actionMeta) => {
    console.group('Value Changed')
    console.log(newValue)
    console.log(`action: ${actionMeta.action}`)
    console.groupEnd()
    if (
      actionMeta.action === 'select-option' ||
      actionMeta.action === 'create-option'
    ) {
      addItem(newValue.value)
    }
  }

  const handleInputChange = (newValue, actionMeta) => {
    console.group('Input Changed')
    console.log(newValue)
    console.log(`action: ${actionMeta.action}`)
    console.groupEnd()
  }

  const addItem = (item) => {
    const newItems = produce(chosenItems, (draftItems) => {
      draftItems.push({ value: item, details: '' })
      return draftItems
    })
    setChosenItems(newItems)
  }

  const deleteItem = (itemIdx) => {
    const newItems = produce(chosenItems, (draftItems) => {
      draftItems.splice(itemIdx, 1)
      return draftItems
    })
    setChosenItems(newItems)
  }

  const updateDetails = (itemIdx, details) => {
    const newItems = produce(chosenItems, (draftItems) => {
      draftItems[itemIdx].details = details
      return draftItems
    })
    setChosenItems(newItems)
  }

  return (
    <div>
      <h2>Add items to your list</h2>
      <CreatableSelect
        isClearable
        onChange={handleChange}
        onInputChange={handleInputChange}
        options={defaultItems}
      />
      {chosenItems.length > 0 && (
        <div>
          <h2>Items selected</h2>
          {chosenItems.map((item, idx) => (
            <div key={idx}>
              <div>
                {item.value}
                <button onClick={() => deleteItem(idx)}>Remove</button>
              </div>
              <div>
                <input
                  type='text'
                  value={item.details}
                  onChange={(e) => updateDetails(idx, e.target.value)}
                  placeholder='Enter any details'
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ItemsToChoose
