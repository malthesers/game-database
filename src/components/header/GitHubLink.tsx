import { Icon, Link } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

export default function GitHubLink() {
  return (
    <Link
      href='https://github.com/malthesers/gamehub'
      display='flex'
      placeContent='center'
      transitionDuration='200ms'
      _hover={{
        opacity: '70%'
      }}
    >
      <Icon as={FaGithub} w='8' h='8' />
    </Link>
  )
}
