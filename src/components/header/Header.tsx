import { HStack, Text } from '@chakra-ui/react'
import ThemeSwitcher from './ThemeSwitcher'
import SearchInput from './SearchInput'
import GameHubLogo from '../icons/GameHubLogo'
import GitHubLink from './GitHubLink'

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
        <SearchInput />
        <ThemeSwitcher />
        <GitHubLink />
      </HStack>
    </HStack>
  )
}
