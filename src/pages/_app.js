import '../styles/custom-styles.css'
import '../styles/dracula.css'
import '../styles/prose-styles.css'

import * as React from 'react'
import { Providers } from '../components/Providers'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Providers />
      <Component {...pageProps} />
    </>
  )
}
