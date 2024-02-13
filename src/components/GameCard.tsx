import { Box, Card, Image, Text } from '@chakra-ui/react'
import { Game } from '../types'

interface GameCardProps {
  game: Game
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Card overflow='hidden' bg='rgba(0, 0, 0, 0.2)'>
      <Image width='100%' height='100%' src={game.background_image} objectFit='cover'></Image>
      <Box p='2'>
        <Text fontWeight='bold' textAlign='center'>
          {game.name}
        </Text>
      </Box>
    </Card>
  )
}
