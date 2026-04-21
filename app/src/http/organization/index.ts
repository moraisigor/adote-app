import { useMutation, useQuery } from '@tanstack/react-query'

import { CreateOrganizationRequest } from '@/type/create.organization.request'
import { Organization } from '@/type/organization'
import { SaveOrganizationRequest } from '@/type/save.organization.request'

import { client } from '../http.client'

export const useListOrganization = () => {
  return useQuery({
    queryFn: () => client.get<Organization[]>('/organization').then((r) => r.data),
    queryKey: ['ListOrganization']
  })
}

export const useGetOrganization = (id: string) => {
  return useQuery({
    queryFn: () => client.get<Organization>(`/organization/${id}`).then((r) => r.data),
    queryKey: ['GetOrganization', id]
  })
}

export const useCreateOrganization = () => {
  return useMutation({
    mutationFn: (body: CreateOrganizationRequest) =>
      client.post<Organization>('/organization', body).then((r) => r.data),
    mutationKey: ['CreateOrganization']
  })
}

export const useSaveOrganization = (id: string, organization: SaveOrganizationRequest) => {
  return useMutation({
    mutationFn: (organization: SaveOrganizationRequest) =>
      client.put<Organization>(`/organization/${id}`, organization).then((r) => r.data),
    mutationKey: ['SaveOrganization', id]
  })
}

export const useRemoveOrganization = (id: string) => {
  return useMutation({
    mutationFn: () => client.delete<Organization>(`/organization/${id}`).then((r) => r.data),
    mutationKey: ['RemoveOrganization', id]
  })
}
