import { Flex, GridItem, Show } from '@chakra-ui/react'
import Header from './components/header/Header'
import GameGrid from './components/GameGrid'
import GenreList from './components/sidebar/GenreList'
import { useState } from 'react'
import { Genre } from './types'

export default function App() {
  // const [chosenGenres, setChosenGenres] = useState<Genre[]>([])
  const [chosenGenre, setChosenGenre] = useState<Genre | null>(null)

  // function updateGenres(genre: Genre) {
  //   setChosenGenres(
  //     chosenGenres.includes(genre)
  //       ? chosenGenres.filter((chosenGenre) => chosenGenre.id !== genre.id)
  //       : [...chosenGenres, genre]
  //   )
  // }

  return (
    <>
      <Header />
      <Flex p='4' gap='4' mx='auto' maxW='90rem' flexDir='row'>
        <Show above='md'>
          <GenreList updateGenres={(genre) => setChosenGenre(genre)} />
        </Show>
        <GameGrid chosenGenre={chosenGenre} />
      </Flex>
    </>
  )
}
