import { useInfiniteQuery } from '@tanstack/react-query'
import ApiClient from '../services/api-client'
import { Game } from '../types'
import useGameQueryStore from '../stores'

const apiClient = new ApiClient<Game>('/games')

export default function useGames() {
  const queryParams = useGameQueryStore((state) => state.queryParams)

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
