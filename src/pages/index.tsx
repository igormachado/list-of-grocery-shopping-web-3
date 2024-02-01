import Form from '../components/Form'
import Header from '../components/Header'
import ListAllProduct from '../components/List'
import { ListContextProvider } from '../context/prodcutsShop'

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