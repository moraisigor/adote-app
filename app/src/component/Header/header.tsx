import { ReactNode, useState, type ComponentProps, type FunctionComponent } from 'react'

import { Dialog } from './dialog'

import { AvatarIcon } from '../AvatarIcon'

type HeaderProps = {
  option: {
    url: string
    name: string
    children: ReactNode
    sign: {
      sign: string
      onSign: () => void
    }
  }
  navigation: {
    url: string
    name: string
  }[]
} & ComponentProps<'header'>

export const Header: FunctionComponent<HeaderProps> = ({ option, navigation, ...props }: HeaderProps) => {
  const { url, name, children } = option

  const [open, setOpen] = useState<boolean>(false)

  return (
    <header
      {...props}
      class='bg-indigo-600 dark:bg-indigo-900'>
      <nav
        class='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='global'>
        <div class='flex'>
          <a
            class='-m-1.5 p-1.5'
            href={url}>
            <span class='sr-only'>{name}</span>
            {children}
          </a>
        </div>
        <div class='flex'>
          <div
            class='h-10 -m-1 -p-1'
            onClick={() => setOpen(true)}>
            <span class='sr-only'>open menu</span>
            <AvatarIcon />
          </div>
        </div>
      </nav>
      <Dialog
        open={open}
        option={option}
        navigation={navigation}
        setOpen={setOpen}
      />
    </header>
  )
}
