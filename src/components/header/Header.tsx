import { HStack, Text, useMediaQuery } from '@chakra-ui/react'
import ThemeSwitcher from './ThemeSwitcher'
import SearchInput from './SearchInput'
import GameHubLogo from '../icons/GameHubLogo'
import GitHubLink from './GitHubLink'

interface HeaderProps {
  updateSearch: (input: string) => void
}

export default function Header({ updateSearch }: HeaderProps) {
  const [isMobile] = useMediaQuery('(min-width: 669px)')

  return (
    <HStack as='header'>
      <HStack w='100%' maxW='90rem' mx='auto' p='4' justifyContent='space-between'>
        <HStack>
          <GameHubLogo />
          <Text display={isMobile ? 'none' : 'inline-block'} fontSize='2xl' fontWeight='bold'>
            GameHub
          </Text>
        </HStack>
        <SearchInput updateSearch={updateSearch} />
        <ThemeSwitcher />
        <GitHubLink />
      </HStack>
    </HStack>
  )
}
