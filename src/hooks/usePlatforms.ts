import { useQuery } from '@tanstack/react-query'
import ApiClient from '../services/api-client'
import { Platform } from '../types'

const apiClient = new ApiClient<Platform>('/platforms/lists/parents')

export default function usePlatforms() {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll
  })
}
