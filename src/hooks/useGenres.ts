import { Genre } from '../types'
import ApiClient from '../services/api-client'
import { useQuery } from '@tanstack/react-query'

const apiClient = new ApiClient<Genre>('/genres')

export default function useGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll
  })
}
