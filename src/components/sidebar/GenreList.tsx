import { Spinner, Text, VStack } from '@chakra-ui/react'
import useGenres from '../../hooks/useGenres'
import { Genre } from '../../types'
import GenreLink from './GenreLink'

interface GenreListProps {
  updateGenre: (genre: Genre) => void
  chosenGenre: Genre | null
}

export default function GenreList({ chosenGenre, updateGenre }: GenreListProps) {
  const { data: genres, error, loaded } = useGenres()

  return (
    <VStack as='aside' w='20rem' h='fit-content' p='2' rounded='8'>
      {error && <Text>{error}</Text>}
      {!loaded ? (
        <Spinner />
      ) : (
        <VStack gap='0'>
          <Text w='100%' textAlign='left' fontSize='20' fontWeight='semibold' p='2'>
            Genres
          </Text>
          {genres?.map((genre) => (
            <GenreLink genre={genre} key={genre.slug} chosenGenre={chosenGenre} updateGenre={updateGenre} />
          ))}
        </VStack>
      )}
    </VStack>
  )
}
