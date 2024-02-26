import { Flex, Show, VStack } from '@chakra-ui/react'
import Header from './components/header/Header'
import GameGrid from './components/GameGrid'
import GenreList from './components/sidebar/GenreList'
import { useState } from 'react'
import { Genre, Platform } from './types'
import PlatformSelector from './components/PlatformSelector'

export default function App() {
  // const [chosenGenres, setChosenGenres] = useState<Genre[]>([])
  const [chosenGenre, setChosenGenre] = useState<Genre | null>(null)
  const [chosenPlatform, setChosenPlatform] = useState<Platform | null>(null)

  return (
    <>
      <Header />
      <Flex p='4' gap='4' mx='auto' maxW='90rem' flexDir='row'>
        <Show above='md'>
          <GenreList chosenGenre={chosenGenre} updateGenres={(genre) => setChosenGenre(genre)} />
        </Show>
        <VStack>
          <PlatformSelector
            chosenPlatform={chosenPlatform}
            updatePlatform={(platform) => setChosenPlatform(platform)}
          />
          <GameGrid chosenGenre={chosenGenre} chosenPlatform={chosenPlatform} />
        </VStack>
      </Flex>
    </>
  )
}
