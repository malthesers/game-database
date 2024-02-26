import { Game, Genre } from '../types'
import useData from './useData'

export default function useGames(chosenGenre: Genre | null) {
  return useData<Game>(
    'games',
    {
      params: {
        genres: chosenGenre?.id
      }
    },
    [chosenGenre?.id]
  )
}
