import Head from 'next/head';
import { Portfolio } from '../components/Portfolio'

export default function portfolio() {
  return (
    <>
      <Portfolio/>
      <Head>
        <title>Portfolio • Emilio Andere</title>
        <meta property="og:title" content="Portfolio • Emilio Andere" key="title" />
      </Head>
    </>
  )
}
