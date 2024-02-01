import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
// import { ListContextProvider } from './context/prodcutsShop'

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
