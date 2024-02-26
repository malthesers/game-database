import { QueryParams } from '../App'
import { Game, Genre, Platform } from '../types'
import useData from './useData'

export default function useGames(queryParams: QueryParams) {
  return useData<Game>(
    'games',
    {
      params: {
        genres: queryParams.genre?.id,
        parent_platforms: queryParams.platform?.id
      }
    },
    [queryParams]
  )
}
