import { Heading, Spinner, Text, VStack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame'
import SplashBanner from '../components/game-page/SplashBanner'

export default function GamePage() {
  const { slug } = useParams()
  const { data: game, isLoading, error } = useGame(slug!)

  if (isLoading) return <Spinner />
  if (error || !game) throw error

  console.log(game)

  return (
    <>
      <VStack p='4' gap='4' mx='auto' maxW='90rem'>
        <SplashBanner imageUrl={game.background_image} />
        <Heading>{game.name}</Heading>
        {/* <Text>{game.description_raw}</Text> */}
      </VStack>
    </>
  )
}
