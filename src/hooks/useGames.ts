import { useInfiniteQuery } from '@tanstack/react-query'
import { QueryParams } from '../App'
import ApiClient from '../services/api-client'
import { Game } from '../types'

const apiClient = new ApiClient<Game>('/games')

export default function useGames(queryParams: QueryParams) {
  return useInfiniteQuery({
    queryKey: ['games', queryParams],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: queryParams.genre?.id,
          parent_platforms: queryParams.platform?.id,
          ordering: queryParams.sorting,
          search: queryParams.search,
          page: pageParam
        }
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    }
  })
}
