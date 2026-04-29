'use client'

import { useCallback, type ReactNode } from 'react'

import { SideBarLayout } from '@hollowsoft/numb'

import { useListOrganization } from '@/http/organization'
import { useGetCurrentUser, useSetCurrentOrganization } from '@/http/user'

import { useOrganizationStore } from '@/store/organization.store'

import { NavBarMenu } from './nav.bar.menu'
import { SideBarMenu } from './side.bar.menu'

export default function Layout({ children }: { children: ReactNode }) {
  const { setCurrent } = useOrganizationStore()

  const { data: list } = useListOrganization()
  const { data: user } = useGetCurrentUser()

  const { mutate: set } = useSetCurrentOrganization()

  const onOrganizationChange = useCallback((space: string) => {
    set(space, {
      onError: (e) => console.error(e),
      onSuccess: () => setCurrent(space)
    })
  }, [])

  return (
    <SideBarLayout
      nav={<NavBarMenu user={user} />}
      side={
        <SideBarMenu
          user={user}
          current={user?.organization}
          organization={list}
          onOrganizationChange={onOrganizationChange}
        />
      }>
      {children}
    </SideBarLayout>
  )
}
