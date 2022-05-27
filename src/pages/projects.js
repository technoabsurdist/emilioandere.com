import Head from 'next/head';
import { Projects } from '../components/Projects'

export default function projects() {
  return (
    <>
      <Projects/>
      <Head>
        <title>Projects • Ishan Shah</title>
        <meta property="og:title" content="Projects • Ishan Shah" key="title" />
      </Head>
    </>
  )
}
