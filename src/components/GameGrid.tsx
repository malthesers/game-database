import { SimpleGrid, VStack } from '@chakra-ui/react'
import useColumns from '../hooks/useColumns'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import { Game } from '../types'

export default function GameGrid() {
  const { games, error } = useGames()
  const { columnCount } = useColumns()

  const gameColumns: Array<Game[]> = Array.from({ length: columnCount }, () => [])

  games.forEach((game, index) => {
    gameColumns[index % columnCount].push(game)
  })

  return (
    <>
      {error ? (
        <div>error</div>
      ) : (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap='4'>
          {gameColumns.map((gamesList, index) => (
            <VStack key={index} gap='4'>
              {gamesList.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </VStack>
          ))}

          {/* {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))} */}
        </SimpleGrid>
      )}
    </>
  )
}
