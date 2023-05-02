import Head from 'next/head';
import { Build } from '../components/Build'

export default function projects() {
  return (
    <>
      <Build/>
      <Head>
        <title>Build • Ishan Shah</title>
        <meta property="og:title" content="Projects • Ishan Shah" key="title" />
      </Head>
    </>
  )
}
