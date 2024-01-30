import Script from 'next/script'
import * as React from 'react'

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
