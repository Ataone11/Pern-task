import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Providers from '../src/redux/provider'
import { Provider } from 'react-redux'
import { store } from '../src/redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Provider store={store}>
  <Component {...pageProps} />
  </Provider>)
}

export default MyApp
