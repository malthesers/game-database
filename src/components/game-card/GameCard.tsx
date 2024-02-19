import { Card, Image, Text, useColorMode, VStack } from '@chakra-ui/react'
import { Game } from '../../types'
import GamePlatformIcons from './GamePlatformIcons'

interface GameCardProps {
  game: Game
}

export default function GameCard({ game }: GameCardProps) {
  const { colorMode } = useColorMode()

  return (
    <Card
      w='100%'
      maxW='22rem'
      bg={colorMode === 'dark' ? 'purple.900' : 'white'}
      overflow='hidden'
      boxShadow='lg'
      transitionDuration='200ms'
      _hover={{ transform: 'scale(1.05)', zIndex: 10 }}
    >
      <Image h='48' src={game.background_image} objectFit='cover'></Image>
      <VStack p='3' gap='2'>
        <GamePlatformIcons parentPlatforms={game.parent_platforms} />
        <Text w='100%' fontSize='xl' fontWeight='bold'>
          {game.name}
        </Text>
      </VStack>
    </Card>
  )
}
