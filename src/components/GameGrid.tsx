import { SimpleGrid, VStack } from '@chakra-ui/react'
import useWidth from '../hooks/useWidth'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'

export default function GameGrid() {
  const { games, error } = useGames()
  const { windowWidth } = useWidth()

  return (
    <>
      {error ? (
        <div>error</div>
      ) : (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap='4'>
          <div>{windowWidth}</div>
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      )}
    </>
  )
}
