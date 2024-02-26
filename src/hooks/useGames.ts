import { Game, Genre, Platform } from '../types'
import useData from './useData'

interface useGamesProps {
  chosenGenre: Genre | null
  chosenPlatform: Platform | null
}

export default function useGames({ chosenGenre, chosenPlatform }: useGamesProps) {
  return useData<Game>(
    'games',
    {
      params: {
        genres: chosenGenre?.id,
        parent_platforms: chosenPlatform?.id
      }
    },
    [chosenGenre?.id, chosenPlatform?.id]
  )
}
