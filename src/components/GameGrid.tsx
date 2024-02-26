import { SimpleGrid, Text, VStack } from '@chakra-ui/react'
import GameCardSkeleton from './game-card/GameCardSkeleton'
import GameCard from './game-card/GameCard'
import useColumns from '../hooks/useColumns'
import useGames from '../hooks/useGames'
import { Game } from '../types'
import { QueryParams } from '../App'

interface GameGridProps {
  queryParams: QueryParams
}

export default function GameGrid({ queryParams }: GameGridProps) {
  const { data: games, error, loaded } = useGames(queryParams)
  const { columnCount } = useColumns()
  const skeletons = [...Array(12).keys()]

  // Create array of game arrays based on column count
  const gameColumns: Array<Game[]> = Array.from({ length: columnCount }, () => [])

  // Distribute games evenly across columns
  games?.forEach((game, index) => gameColumns[index % columnCount].push(game))

  return (
    <VStack as='section' w='100%' gap='4'>
      {error && <Text>{error}</Text>}
      {!loaded ? (
        <SimpleGrid w='100%' columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap='4'>
          {skeletons.map((skeleton) => (
            <GameCardSkeleton key={skeleton} />
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
