import { useEffect, useState } from 'react'

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

  // useEffect(() => {
  //   fetch('', { method: 'GET' })
  //   .then((res) => res.json())
  //   .then((data: GameResponse) => setGames(data.results))
  //   .catch((err) => console.error(`Error: ${err}`))
  // }, [])

  return (
    <>
      {error ? (
        <div>error</div>
      ) : (
        <ul>
          {games.map((game) => (
            <li>{game.name}</li>
          ))}
        </ul>
      )}
    </>
  )
}
