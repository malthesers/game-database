import useGames from '../hooks/useGames'

export default function GameGrid() {
  const { games, error } = useGames()

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
