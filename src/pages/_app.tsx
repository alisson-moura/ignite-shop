import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'
import CartContextProvider from '../contexts/CartContext'
import Header from '../components/header'


globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartContextProvider>
        <Header />
        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  )
}
