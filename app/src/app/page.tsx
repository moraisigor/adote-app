'use client'

import { useCallback, useMemo, useState } from 'react'

import { useRouter } from 'next/navigation'

import { Search } from '@/component/Search'

import { useSearchLocation } from '@/http/location'
import { useListPost } from '@/http/post'

type Location = {
  id: string
  name: string
}

export default function Page() {
  const router = useRouter()

  const [search, setSearch] = useState<string>('')
  const [location, setLocation] = useState<Location[]>([])

  const isToSearch = useCallback((search: string) => search.length > 2, [])

  const onSelectLocation = useCallback((location: Location) => {}, [])

  const onRemoveLocation = useCallback((id: string) => {}, [])

  const { data: post = [] } = useListPost({
    page: 1,
    amount: 10,
    location: location.map((e) => e.id)
  })

  const { data: list = [] } = useSearchLocation(search, isToSearch(search))

  const options = useMemo(() => {
    return list.map((e) => {
      return {
        id: e.id,
        name: `${e.city}, ${e.state}`
      }
    })
  }, [list])

  return (
    <div>
      <Search
        values={location}
        options={options}
        onChange={(e) => setSearch(e.target.value)}
        onSelectValue={onSelectLocation}
        onRemoveValue={onRemoveLocation}
      />
      <ul></ul>
    </div>
  )
}
