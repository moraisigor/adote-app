'use client'

import './style.css'

import { ReactNode } from 'react'

import { Font } from './font'
import { Provider } from './provider'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='en'
      class={Font.className}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
