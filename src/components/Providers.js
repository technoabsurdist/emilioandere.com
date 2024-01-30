import Head from 'next/head'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'
import * as React from 'react'

const defaultSEO = {
  title: 'Emilio Andere',
  description:
    'Software engineer living in NYC.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ishanshah.me',
    site_name: 'Emilio Andere',
    images: [
      {
        url: 'https://www.ishanshah.me/static/og/default.png',
        alt: 'Emilio Andere',
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
     {/* Dark Mode Toggler */}
      <Script id="darkmode-toggler">
        {`
          if (localStorage.theme === 'light' || (!('theme' in localStorage))) {
            localStorage.theme = 'light'
            document.documentElement.classList.remove('dark')
          } else if (localStorage.theme === 'dark') {
            localStorage.theme = 'dark'
            document.documentElement.classList.add('dark')
          }
        `}
      </Script>
    </>
  )
}
