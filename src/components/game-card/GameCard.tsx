import { Card, HStack, Text, VStack } from '@chakra-ui/react'
import { Game } from '../../types'
import GameGenres from './GameGenres'
import GamePlatformIcons from './GamePlatformIcons'
import GameScore from './GameScore'
import GameScreenshot from './GameScreenshot'
import { Link } from 'react-router-dom'

interface GameCardProps {
  game: Game
}

export default function GameCard({ game }: GameCardProps) {
  const gameUrl = `/games/${game.slug}`

  return (
    <Card
      as='article'
      w='100%'
      maxW='22rem'
      overflow='hidden'
      boxShadow='lg'
      transitionDuration='200ms'
      _hover={{ transform: 'scale(1.05)', zIndex: 10 }}
    >
      <Link to={gameUrl}>
        <GameScreenshot url={game.background_image} />
      </Link>
      <VStack p='3' gap='2' bg='inherit'>
        <HStack w='100%' justifyContent='space-between'>
          <GamePlatformIcons parentPlatforms={game.parent_platforms} />
          <GameScore metacritic={game.metacritic} />
        </HStack>
        <Text w='100%' fontSize='xl' fontWeight='bold'>
          <Link to={gameUrl}>{game.name}</Link>
        </Text>
        <GameGenres genres={game.genres} />
      </VStack>
    </Card>
  )
}
