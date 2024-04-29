import { Spinner, Text, VStack } from '@chakra-ui/react'
import useGenres from '../../hooks/useGenres'
import GenreLink from './GenreLink'

export default function GenreList() {
  const { data: genres, error, isLoading } = useGenres()

  if (error) return <Text>Error</Text>

  return (
    <VStack as='aside' w='20rem' h='fit-content' p='2' rounded='8'>
      {isLoading ? (
        <Spinner />
      ) : (
        <VStack w='100%' gap='0'>
          <Text w='100%' textAlign='left' fontSize='20' fontWeight='semibold' p='2'>
            Genres
          </Text>
          {genres?.results.map((genre) => <GenreLink genre={genre} key={genre.slug} />)}
        </VStack>
      )}
    </VStack>
  )
}
