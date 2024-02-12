import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Game, GameResponse } from '../types'

export default function useGames() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState<string>('')
  useEffect(() => {
    apiClient
      .get<GameResponse>('games')
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        setError(err.response)
      })
  }, [])

  return { games, error }
}
