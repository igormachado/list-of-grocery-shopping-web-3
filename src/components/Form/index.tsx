import {
  Button,
  FormContainer,
  InputItem,
  Quantity,
  SelectCategory,
} from '@/styles/pages/Form'


import { useContext, useState } from 'react'
import { ListContext } from '../../context/prodcutsShop'


export default function Form() {
  const [addItem, setAddItem] = useState('')
  const [addQuantity, setAddQuantity] = useState('')
  const [addCategory, setAddCategory] = useState('')

  const { listItems, setListItems } = useContext(ListContext)


  function handlePreventDefault(e: React.FormEvent) {
    e.preventDefault()
  }

  function handleInputItem(e: React.ChangeEvent<HTMLInputElement>) {
    setAddItem(e.target.value)
  }

  function handleInputQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    setAddQuantity(e.target.value)
  }

  function handleInputCategory(e: React.ChangeEvent<HTMLSelectElement>) {
    setAddCategory(e.target.value)
  }

  function handleCreateItem() {
    if (addItem.length === 0 || addQuantity.length === 0 || addCategory.length === 0) {
      return
    }
    setListItems([
      ...listItems,
      {
        item: addItem,
        quantity: addQuantity,
        category: addCategory,
      },
    ])

    setAddItem('')
    setAddCategory('')
    setAddQuantity('')
  }

  return (
    <>
      <FormContainer onSubmit={handlePreventDefault}>
        <InputItem>
          <span>Item</span>
          <input
            type="text"
            placeholder="Add Item"
            value={addItem}
            onChange={handleInputItem}
            required

          />
        </InputItem>
        <Quantity>
          <span>Quantity</span>
          <input
            type="number"
            value={addQuantity}
            onChange={handleInputQuantity}
            required

          />
        </Quantity>
        <SelectCategory>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            value={addCategory}
            onChange={handleInputCategory}
            defaultValue=""
            required

          >
            <option>Category option</option>
            <option value="Fruit">Fruit</option>
            <option value="Bakary">Bakary</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Drink">Drink</option>
            <option value="Meet">Meet</option>
          </select>
        </SelectCategory>
        <Button onClick={handleCreateItem}>
          <span>+</span>
        </Button>
      </FormContainer>
    </>
  )
}
