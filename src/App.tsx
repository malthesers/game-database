import { Flex, GridItem, Show } from '@chakra-ui/react'
import Header from './components/header/Header'
import GameGrid from './components/GameGrid'
import GenreList from './components/sidebar/GenreList'

export default function App() {
  return (
    <>
      <Header />
      <Flex p='4' gap='4' mx='auto' maxW='90rem' flexDir='row'>
        <Show above='md'>
          <GenreList />
        </Show>
        <GameGrid />
      </Flex>
    </>
  )
}
