import { Box, Card, Image, Text } from '@chakra-ui/react'
import { Game } from '../types'

interface GameCardProps {
  game: Game
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Card
      w='100%'
      maxW='22rem'
      overflow='hidden'
      bg='rgba(0, 0, 0, 0.3)'
      boxShadow='lg'
      transitionDuration='200ms'
      _hover={{ transform: 'scale(1.05)', zIndex: 10 }}
    >
      <Image h='48' src={game.background_image} objectFit='cover'></Image>
      <Box p='2'>
        <Text fontSize='xl' fontWeight='bold' textAlign='center'>
          {game.name}
        </Text>
      </Box>
    </Card>
  )
}
