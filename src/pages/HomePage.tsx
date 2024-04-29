import { Flex, HStack, Show, VStack } from '@chakra-ui/react'
import PlatformSelector from '../components/PlatformSelector'
import SortingSelector from '../components/SortingSelector'
import GenreList from '../components/sidebar/GenreList'
import GameGrid from '../components/GameGrid'

export default function HomePage() {
  return (
    <>
      <Flex p='4' gap='4' mx='auto' maxW='90rem' flexDir='row'>
        <Show above='md'>
          <GenreList />
        </Show>
        <VStack w='100%' gap='4'>
          <HStack w='100%' gap='4' display='flex' flexWrap='wrap'>
            <SortingSelector />
            <PlatformSelector />
          </HStack>
          <GameGrid />
        </VStack>
      </Flex>
    </>
  )
}
