import { SimpleGrid, Text, VStack } from '@chakra-ui/react'
import useColumns from '../hooks/useColumns'
import useGames from '../hooks/useGames'
import GameCard from './game-card/GameCard'
import { Game } from '../types'
import GameCardSkeleton from './game-card/GameCardSkeleton'

export default function GameGrid() {
  const { data: games, error, loaded } = useGames()
  const { columnCount } = useColumns()
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  // Create array of game arrays based on column count
  const gameColumns: Array<Game[]> = Array.from({ length: columnCount }, () => [])

  // Distribute games evenly across columns
  games?.forEach((game, index) => gameColumns[index % columnCount].push(game))

  return (
    <VStack gap='4'>
      {error && <Text>{error}</Text>}
      {!loaded ? (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap='4'>
          {skeletons.map((_, index) => (
            <GameCardSkeleton key={index} />
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap='4'>
          {/* For each game array create column */}
          {gameColumns.map((gamesList, index) => (
            <VStack key={index} gap='4'>
              {/* For each game in game array create game card */}
              {gamesList.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </VStack>
          ))}
        </SimpleGrid>
      )}
    </VStack>
  )
}
