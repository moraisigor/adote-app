import './style.css'

import { ReactNode } from 'react'

import { Footer, Header } from '@/component'

import { Font } from './font'
import { Provider } from './provider'

const main = []

const social = []

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='en'
      class={`h-full bg-white dark:bg-gray-950 scheme-light dark:scheme-dark ${Font.className}`}>
      <body class='h-full flex flex-col'>
        <Provider>
          <Header
            option={{
              url: '/',
              name: 'Your Company',
              icon: {} as any,
              sign: { sign: 'Log in', onSign: () => {} }
            }}
            navigation={[]}
          />
          <main class='flex-1'>{children}</main>
          <Footer
            main={[]}
            social={[]}
            message={''}
          />
        </Provider>
      </body>
    </html>
  )
}
