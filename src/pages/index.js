import Head from 'next/head';
import { Home } from '../components/Home'

export default function home() {
  return (
    <>
      <Home/>
      <Head>
        <title>Emilio Andere</title>
        <meta property="og:title" content="Emilio Andere" key="title" />
      </Head>
    </>
  )
}
