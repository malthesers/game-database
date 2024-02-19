import { Link, VStack } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'

export default function GenreList() {
  const { genres } = useGenres()

  return (
    <VStack>
      {genres.map((genre) => (
        <Link key={genre.slug} w='100%' textAlign='left'>
          {genre.name}
        </Link>
      ))}
    </VStack>
  )
}
