import { SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'

export default function GameGrid() {
  const { games, error } = useGames()

  return (
    <>
      {error ? (
        <div>error</div>
      ) : (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap='4'>
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      )}
    </>
  )
}
