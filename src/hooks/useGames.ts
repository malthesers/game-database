import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

interface GameResponse {
  count: number
  results: Game[]
}

interface Game {
  id: number
  name: string
}

export default function useGames() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    apiClient.get<GameResponse>('games').then((res) => setGames(res.data.results))
  }, [])

  return { games, error }
}
