import CreatableSelect from 'react-select/creatable'
import { useState } from 'react'

const ItemsToChoose = () => {
  const [chosenItems, setChosenItems] = useState([])

  const defaultItems = ['Stroller', 'Diapers'].map((item) => ({
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
    setChosenItems([...chosenItems, { item: item, details: '' }])
  }

  const updateDetails = (itemIdx, details) => {
    let newItems = chosenItems.slice(0, itemIdx)
    newItems.push({ item: chosenItems[itemIdx].item, details: details })
    newItems = newItems.concat(chosenItems.slice(itemIdx + 1))
    setChosenItems(newItems)
  }

  return (
    <div>
      <CreatableSelect
        isClearable
        onChange={handleChange}
        onInputChange={handleInputChange}
        options={defaultItems}
      />
    </div>
  )
}

export default ItemsToChoose
