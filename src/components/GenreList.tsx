import { Link, Text, VStack } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'

export default function GenreList() {
  const { data: genres, error, loaded } = useGenres()

  return (
    <VStack>
      {error && <Text>{error}</Text>}
      {!loaded ? (
        <Text>yo</Text>
      ) : (
        genres?.map((genre) => (
          <Link key={genre.slug} w='100%' textAlign='left'>
            {genre.name}
          </Link>
        ))
      )}
    </VStack>
  )
}
