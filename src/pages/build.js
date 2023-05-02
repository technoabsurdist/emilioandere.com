import Head from 'next/head';
import { Build } from '../components/Build'

export default function build() {
  return (
    <>
      <Build/>
      <Head>
        <title>Build • Ishan Shah</title>
        <meta property="og:title" content="Build • Ishan Shah" key="title" />
      </Head>
    </>
  )
}
