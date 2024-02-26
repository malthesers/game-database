import { HStack, Link, Text } from '@chakra-ui/react'
import { Genre } from '../../types'

interface GameGenresProps {
  genres: Genre[]
}

export default function GameGenres({ genres }: GameGenresProps) {
  return (
    <HStack w='100%' justifyContent='space-between' fontSize='14'>
      <Text>Genres:</Text>
      <HStack gap='1' flexWrap='wrap'>
        {genres.map((genre, index) => (
          <Text as='span' key={genre.slug}>
            <Link
              display='inline-block'
              textDecoration='underline'
              transitionDuration='200ms'
              _hover={{
                opacity: '70%'
              }}
            >
              {genre.name}
            </Link>
            {genres.length - 1 !== index && (
              <Text as='span' display='inline-block'>
                ,
              </Text>
            )}
          </Text>
        ))}
      </HStack>
    </HStack>
  )
}
