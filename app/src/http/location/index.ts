import { useQuery } from '@tanstack/react-query'

import { Location } from '@/type/location'

import { client } from '../http.client'

export const useSearchLocation = (search: string) => {
  return useQuery({
    queryFn: () => client.get<Location[]>('/location', { params: { search } }).then((r) => r.data),
    queryKey: ['SearchLocation', search]
  })
}
