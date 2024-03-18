import { Flex, HStack, Show, VStack } from '@chakra-ui/react'
import PlatformSelector from './components/PlatformSelector'
import GenreList from './components/sidebar/GenreList'
import Header from './components/header/Header'
import GameGrid from './components/GameGrid'
import { useState } from 'react'
import { Genre, Platform } from './types'
import SortingSelector from './components/SortingSelector'

export interface QueryParams {
  genre: Genre | null
  platform: Platform | null
  sorting: string
}

export default function App() {
  const [queryParams, setQueryParams] = useState<QueryParams>({} as QueryParams)

  return (
    <>
      <Header />
      <Flex p='4' gap='4' mx='auto' maxW='90rem' flexDir='row'>
        <Show above='md'>
          <GenreList
            chosenGenre={queryParams.genre}
            updateGenre={(genre) => setQueryParams({ ...queryParams, genre })}
          />
        </Show>
        <VStack w='100%' gap='4'>
          <HStack w='100%' gap='4'>
            <SortingSelector
              sorting={queryParams.sorting}
              updateSorting={(sorting) => setQueryParams({ ...queryParams, sorting })}
            />
            <PlatformSelector
              chosenPlatform={queryParams.platform}
              updatePlatform={(platform) => setQueryParams({ ...queryParams, platform })}
            />
          </HStack>
          <GameGrid queryParams={queryParams} />
        </VStack>
      </Flex>
    </>
  )
}
