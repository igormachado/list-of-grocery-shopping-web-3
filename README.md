### React List of Grocery Shopping Web3 🧨🎯

## ICP Zero to Dapp Hackathon Powered by Encode 🔋🚀🚧

# Newbie Bounty


🌏🏛 This project was created at the EnCode Club hackathon event that I took part. I created a simple project using ICP technologies to create a web3 on the blockchain. This project is a grocery shopping list. This project was created at the EnCode Club hackathon event which I participated in. I created a simple project using ICP technologies to create a web3 on the blockchain. This project is a shopping list. My first project using blockchain, so I decided to make it simple to learn and now I am confident about increasing my skills in web3 development.

**Technologies Used** 🤖 💻

- NextJS ✅
  
- ICP Blockchain canister ✅
  
- Stitches CSS ✅
  
- Typescript ✅
    
#### Gettinn Started 🏁

1. **Download the project.** ⚡
  
  ```bash
  git clone git@github.com:igormachado/list-of-grocery-shopping-web-3.git
  ```
  
2. **Install project dependencies, npm** ⚡
  

```bash
cd list-of-grocery-shopping-web-3
npm install        
```

#### Explaining the project List of Grocery Shopping Web3

**pages/index** 🧨

  
  - This page is the main one for the project.
  - With 3 components (Header, Form, ListAllProduct)
    

```js
export default function Home() {
  return (
    <>
      <ListContextProvider>
        <Header />
        <Form />
        <ListAllProduct />
      </ListContextProvider>
    </>
  )
}
```

- ***Component Form***
  
  - src/components/Form.  

```js
// submit form and prevent reload de page when create a list.
function handlePreventDefault(e: React.FormEvent) {
    e.preventDefault()
  }

  // This function create a item of the list
  function handleInputItem(e: React.ChangeEvent<HTMLInputElement>) {
    setAddItem(e.target.value)
  }

  // This function create how many quantity you want
  // Exemplo 3 Steaks, 4 Wines
  function handleInputQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    setAddQuantity(e.target.value)
  }

  // This function create a category item
  // Exemplo: item: Steak, quantiy: 3,  category: meet
  function handleInputCategory(e: React.ChangeEvent<HTMLSelectElement>) {
    setAddCategory(e.target.value)
  }

  // This function create a list of grocery shopping.
  function handleCreateItem() {
    // It doesn't allow creating an empty item
    if (addItem.length === 0 || addQuantity.length === 0 || addCategory.length === 0) {
      return
    }
    // Create item
    setListItems([
      ...listItems,
      {
        item: addItem,
        quantity: addQuantity,
        category: addCategory,
      },
    ])
    // clean all inputs
    setAddItem('')
    setAddCategory('')
    setAddQuantity('')
  }
```

- ***Component List***
  
  - src/components/List.
  
```js
// This function is a boolean false/true
// if click true else false
 const [active, setActive] = useState(false)

  function handleClickActive() {
    setActive(!active)
  }

  // if active is true input checked change to green
  // else gray.
  <button onClick={handleClickActive}>
    {active ? (
      <Image src={uncheckedImg} alt="unchecked item" />
          ) : (
      <Image src={checkGreenImg} alt="checked item" />
    )}
  </button>
  // if input checked is true the style item changed.
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


  //When select a category the same image is select.
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



// This function show item when is create.
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
```