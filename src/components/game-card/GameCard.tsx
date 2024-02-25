import { Card, HStack, Text, useColorMode, VStack } from '@chakra-ui/react'
import { Game } from '../../types'
import GameGenres from './GameGenres'
import GamePlatformIcons from './GamePlatformIcons'
import GameScore from './GameScore'
import GameScreenshot from './GameScreenshot'

interface GameCardProps {
  game: Game
}

export default function GameCard({ game }: GameCardProps) {
  const { colorMode } = useColorMode()

  return (
    <Card
      w='100%'
      maxW='22rem'
      bg={colorMode === 'dark' ? 'purple.900' : 'gray.50'}
      overflow='hidden'
      boxShadow='lg'
      transitionDuration='200ms'
      _hover={{ transform: 'scale(1.05)', zIndex: 10 }}
    >
      <GameScreenshot url={game.background_image} />
      <VStack p='3' gap='2'>
        <HStack w='100%' justifyContent='space-between'>
          <GamePlatformIcons parentPlatforms={game.parent_platforms} />
          <GameScore metacritic={game.metacritic} />
        </HStack>
        <Text w='100%' fontSize='xl' fontWeight='bold'>
          {game.name}
        </Text>
        <GameGenres genres={game.genres} />
      </VStack>
    </Card>
  )
}
