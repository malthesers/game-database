import { Text, VStack } from '@chakra-ui/react'
import useGenres from '../../hooks/useGenres'
import GenreLink from './GenreLink'

export default function GenreList() {
  const { data: genres, error, loaded } = useGenres()

  return (
    <VStack as='aside' w='fit-content' h='fit-content' p='2' rounded='8'>
      {error && <Text>{error}</Text>}
      {!loaded ? (
        <Text>Loading...</Text>
      ) : (
        <VStack gap='0'>
          <Text w='100%' textAlign='left' fontSize='20' fontWeight='semibold' p='2'>
            Genres
          </Text>
          {genres?.map((genre) => <GenreLink genre={genre} key={genre.slug} />)}
        </VStack>
      )}
    </VStack>
  )
}
