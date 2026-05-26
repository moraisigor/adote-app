import { ComponentType, SVGProps, useState, type ComponentProps, type FunctionComponent } from 'react'

import { Bars3Icon } from '@heroicons/react/24/outline'

import { Dialog } from './dialog'

type HeaderProps = {
  option: {
    url: string
    name: string
    icon: ComponentType<SVGProps<SVGSVGElement>>
    sign: {
      sign: string
      onSign: () => void
    }
  }
  navigation: {
    url: string
    name: string
  }[]
} & ComponentProps<'div'>

export const Header: FunctionComponent<HeaderProps> = ({ option, navigation, ...props }: HeaderProps) => {
  const {
    url,
    name,
    icon: Icon,
    sign: { sign, onSign }
  } = option

  const [open, setOpen] = useState<boolean>(false)

  return (
    <header
      {...props}
      class='bg-indigo-600 dark:bg-indigo-900'>
      <nav
        class='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='global'>
        <div class='flex lg:flex-1'>
          <a
            class='-m-1.5 p-1.5'
            href={url}>
            <span class='sr-only'>{name}</span>
            <Icon />
          </a>
        </div>
        <div class='flex lg:hidden'>
          <button
            class='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-indigo-300 dark:text-indigo-200'
            type='button'
            onClick={() => setOpen(true)}>
            <span class='sr-only'>open menu</span>
            <Bars3Icon
              class='size-6'
              aria-hidden='true'
            />
          </button>
        </div>
        <div class='hidden lg:flex lg:gap-x-12'>
          {navigation.map((e) => {
            const { url, name } = e

            return (
              <a
                class='text-sm/6 font-semibold text-white'
                key={name}
                href={url}>
                {name}
              </a>
            )
          })}
        </div>
        <div class='hidden lg:flex lg:flex-1 lg:justify-end'>
          <span
            class='text-sm/6 font-semibold text-white'
            onClick={onSign}>
            {sign} <span aria-hidden='true'>&rarr;</span>
          </span>
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
