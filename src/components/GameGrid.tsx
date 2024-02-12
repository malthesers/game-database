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

export default function GameGrid() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    // apiClient.get<GameResponse>('games').then((res) => setGames(res.data.results))
  }, [])

  return (
    <>
      {error ? (
        <div>error</div>
      ) : (
        <ul>
          {games.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      )}
    </>
  )
}
