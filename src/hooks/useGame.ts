import { useQuery } from '@tanstack/react-query'
import ApiClient from '../services/api-client'
import { Game } from '../types'

const apiClient = new ApiClient<Game>('/games')

export default function useGame(slug: string) {
  return useQuery({
    queryKey: ['game', slug],
    queryFn: () => apiClient.getOne(slug)
  })
}
