import { Badge } from '@chakra-ui/react'

interface GameScoreProps {
  metacritic: number
}

export default function GameScore({ metacritic }: GameScoreProps) {
  const color = metacritic > 80 ? 'green' : metacritic > 60 ? 'yellow' : 'red'

  return <Badge colorScheme={color}>{metacritic}</Badge>
}
