import { Icon, Link } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

export default function GitHubLink() {
  return (
    <Link
      href='https://github.com/malthesers/gamehub'
      display='flex'
      placeContent='center'
      aspectRatio='1/1'
      transitionDuration='200ms'
      _hover={{
        opacity: '70%'
      }}
    >
      <Icon as={FaGithub} minW='2.5rem' h='100%' />
    </Link>
  )
}
