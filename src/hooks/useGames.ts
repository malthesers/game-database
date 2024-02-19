import { Game } from '../types'
import useData from './useData'

export default function useGames() {
  return useData<Game>('games')
}
