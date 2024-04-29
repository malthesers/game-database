import { Button, Image, Text, useColorMode } from '@chakra-ui/react'
import cropImage from '../../services/image-cropper'
import { Genre } from '../../types'
import useGameQueryStore from '../../stores'

interface GenreLinkProps {
  genre: Genre
}

export default function GenreLink({ genre }: GenreLinkProps) {
  const { colorMode } = useColorMode()
  const chosenGenre = useGameQueryStore((state) => state.queryParams.genre)
  const updateGenre = useGameQueryStore((state) => state.setGenre)

  return (
    <Button
      onClick={() => updateGenre(genre)}
      key={genre.slug}
      w='100%'
      h='auto'
      display='flex'
      flexDir='row'
      alignContent='start'
      justifyContent='start'
      gap='2'
      p='2'
      borderRadius='xl'
      fontWeight='600'
      transitionDuration='200ms'
      background={
        chosenGenre?.id === genre.id ? (colorMode === 'light' ? 'gray.200' : 'purple.800') : 'transparent'
      }
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
