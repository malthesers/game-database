import { Button, Image, Text, useColorMode } from '@chakra-ui/react'
import cropImage from '../../services/image-cropper'
import { Genre } from '../../types'

interface GenreLinkProps {
  updateGenres: (genre: Genre) => void
  genre: Genre
}

export default function GenreLink({ genre, updateGenres }: GenreLinkProps) {
  const { colorMode } = useColorMode()

  return (
    <Button
      onClick={() => updateGenres(genre)}
      key={genre.slug}
      w='100%'
      h='auto'
      background='none'
      display='flex'
      flexDir='row'
      alignContent='start'
      justifyContent='start'
      gap='2'
      p='2'
      borderRadius='xl'
      fontWeight='600'
      transitionDuration='200ms'
      _hover={{
        background: colorMode === 'light' ? 'gray.200' : 'purple.800'
      }}
    >
      <Image
        src={cropImage(genre.image_background)}
        alt={`${genre.name}`}
        w='10'
        h='10'
        objectFit='cover'
        borderRadius='lg'
      />
      <Text>{genre.name}</Text>
    </Button>
  )
}
