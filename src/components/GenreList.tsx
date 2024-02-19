import { Link, VStack } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'

export default function GenreList() {
  const { genres } = useGenres()

  return (
    <VStack>
      {genres.map((genre) => (
        <Link key={genre.slug}>{genre.name}</Link>
      ))}
    </VStack>
  )
}
