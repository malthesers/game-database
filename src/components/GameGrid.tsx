import { SimpleGrid, VStack } from '@chakra-ui/react'
import useWidth from '../hooks/useWidth'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import { useEffect, useState } from 'react'
import { Game } from '../types'

export default function GameGrid() {
  const { games, error } = useGames()
  const { windowWidth } = useWidth()

  const [columnCount, setColumnCount] = useState<number>(1)
  const gameColumns: Array<Game[]> = Array.from({ length: columnCount }, () => [])

  games.forEach((game, index) => {
    gameColumns[index % columnCount].push(game)
  })

  useEffect(() => {
    if (windowWidth < 768) {
      setColumnCount(1)
    } else if (windowWidth < 992) {
      setColumnCount(2)
    } else if (windowWidth < 1280) {
      setColumnCount(3)
    } else {
      setColumnCount(4)
    }
  }, [windowWidth])

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
