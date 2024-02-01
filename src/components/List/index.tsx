import {
  ContentList,
  Frame01,
  Frame02,
  ListContainer,
} from '@/styles/pages/List'
import FruitImg from '../../assets/apple.svg'
import MeetImg from '../../assets/meet.svg'
import DrinkImg from '../../assets/drink.svg'
import BakaryImg from '../../assets/bakary.svg'
import VegetableImg from '../../assets/vegetable.svg'

import checkGreenImg from '../../assets/checkGreen.svg'
import uncheckedImg from '../../assets/unchecked.svg'

import moreVerticalImg from '../../assets/more-vertical.svg'
import { useContext, useState } from 'react'
import { ListContext } from '../../context/prodcutsShop'
import Image from 'next/image'

interface ListItemProps {
  item: string
  category: string
  quantity: string
}

export default function ListAllProduct() {
  const { listItems } = useContext(ListContext)
  return (
    <>
      {listItems.map((product) => (
        <List
          key={product.item}
          item={product.item}
          category={product.category}
          quantity={
            product.quantity === '1'
              ? product.quantity + ' unit'
              : product.quantity + ' units'
          }
        />
      ))}
    </>
  )
}

function List(product: ListItemProps) {
  
  const [active, setActive] = useState(false)

  function handleClickActive() {
    setActive(!active)
  }

  return (
    <>
      
        <ListContainer>
          <ContentList>
            <Frame01>
              <button onClick={handleClickActive}>
                {active ? (
                  <Image src={uncheckedImg} alt="unchecked item" />
                ) : (
                  <Image src={checkGreenImg} alt="checked item" />
                )}
              </button>
              <div>
                <span
                  style={{
                    textDecoration: active ? 'line-through' : '',
                    color: active ? 'red' : '',
                  }}
                >
                  {product.item}
                </span>
                <span style={{ color: active ? 'red' : '' }}>
                  {product.quantity}
                </span>
              </div>
            </Frame01>
            <Frame02>
              <p>
                {product.category === 'Fruit' ? (
                  <Image src={FruitImg} alt="fruit" />
                ) : product.category === 'Meet' ? (
                  <Image src={MeetImg} alt="meet" />
                ) : product.category === 'Drink' ? (
                  <Image src={DrinkImg} alt="drink" />
                ) : product.category === 'Bakary' ? (
                  <Image src={BakaryImg} alt="bakary" />
                ) : (
                  <Image src={VegetableImg} alt="Vegetable" />
                )}
                <span>{product.category}</span>
              </p>
              <Image src={moreVerticalImg} alt="3 point vertical" />
            </Frame02>
          </ContentList>
        </ListContainer>
    </>
  )
}
