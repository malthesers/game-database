import { HStack, Icon, Link, Text } from '@chakra-ui/react'
import ThemeSwitcher from './ThemeSwitcher'
import SearchInput from './SearchInput'
import GameHubLogo from '../icons/GameHubLogo'
import { FaGithub } from 'react-icons/fa'

export default function Header() {
  return (
    <HStack as='header'>
      <HStack w='100%' maxW='90rem' mx='auto' p='4' justifyContent='space-between'>
        <HStack>
          <GameHubLogo />
          <Text fontSize='2xl' fontWeight='bold'>
            GameHub
          </Text>
        </HStack>
        <SearchInput></SearchInput>
        <ThemeSwitcher></ThemeSwitcher>
        <HStack>
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
        </HStack>
      </HStack>
    </HStack>
  )
}
