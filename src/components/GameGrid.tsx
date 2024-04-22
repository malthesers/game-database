import { HStack, SimpleGrid, Spinner, Text, VStack } from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroll-component'
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
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(queryParams)
  const { columnCount } = useColumns()
  const skeletons = [...Array(12).keys()]
  const fetchedGamesCount = data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0

  // Create array of game arrays based on column count
  const gameColumns: Array<Game[]> = Array.from({ length: columnCount }, () => [])

  // Distribute games evenly across columns
  data?.pages.forEach((page) => {
    page.results.forEach((game, index) => gameColumns[index % columnCount].push(game))
  })

  if (error) return <Text>Error</Text>

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      next={() => fetchNextPage()}
      hasMore={hasNextPage || false}
      loader={<Spinner mx='auto' />}
    >
      <VStack as='section' w='100%' gap='4'>
        {isLoading ? (
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
    </InfiniteScroll>
  )
}
