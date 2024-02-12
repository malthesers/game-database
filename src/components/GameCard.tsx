import { Card, Image, Text } from '@chakra-ui/react'
import { Game } from '../types'

interface GameCardProps {
  game: Game
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Card overflow='hidden'>
      <Text textAlign='center'>{game.name}</Text>
      <Image width='100%' height='100%' src={game.background_image} objectFit='cover'></Image>
    </Card>
  )
}
