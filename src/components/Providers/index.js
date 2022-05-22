import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import * as React from 'react'

const defaultSEO = {
  title: 'Ishan Shah',
  description:
    'Software engineer, student, and writer, living in San Francisco.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ishanshah.me',
    site_name: 'Ishan Shah',
    images: [
      {
        url: 'https://ishanshah.me/static/og/default.png',
        alt: 'Ishan Shah',
      },
    ],
  },
  twitter: {
    handle: '@ishan0102',
    site: '@ishan0102',
    cardType: 'summary_large_image',
  },
}

export function Providers() {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <Head>
        <link rel="icon" href="/static/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/static/favicon.png"
          type="image/png"
          sizes="any"
        />
        <link rel="apple-touch-icon" href="/static/meta/apple-touch-icon.png" />
        <link rel="manifest" href="/static/meta/manifest.webmanifest" />
        <meta
          name="theme-color"
          content="#fff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="rgb(23, 23, 23)"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
    </>
  )
}