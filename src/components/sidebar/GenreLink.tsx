import { Image, Link, Text, useColorMode } from '@chakra-ui/react'
import cropImage from '../../services/image-cropper'
import { Genre } from '../../types'

interface GenreLinkProps {
  genre: Genre
}

export default function GenreLink({ genre }: GenreLinkProps) {
  const { colorMode } = useColorMode()

  return (
    <Link
      key={genre.slug}
      w='100%'
      display='flex'
      flexDir='row'
      alignItems='center'
      gap='2'
      p='2'
      borderRadius='xl'
      transitionDuration='200ms'
      _hover={{
        background: colorMode === 'light' ? 'gray.50' : 'purple.800'
      }}
    >
      <Image src={cropImage(genre.image_background)} alt={`${genre.name}`} w='10' h='10' objectFit='cover' borderRadius='lg' />
      <Text>{genre.name}</Text>
    </Link>
  )
}
