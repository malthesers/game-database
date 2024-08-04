import { HStack, Link, Text, useColorMode, useMediaQuery } from '@chakra-ui/react'
import ThemeSwitcher from './ThemeSwitcher'
import SearchInput from './SearchInput'
import GameHubLogo from '../icons/GameHubLogo'
import GitHubLink from './GitHubLink'

interface HeaderProps {
  updateSearch: (input: string) => void
}

export default function Header({ updateSearch }: HeaderProps) {
  const { colorMode } = useColorMode()
  const [isMobile] = useMediaQuery('(max-width: 669px)')

  return (
    <HStack as='header' backgroundColor={colorMode === 'dark' ? 'rgb(0,0,0,0.5)' : 'rgb(255,255,255,0.2)'}>
      <HStack w='100%' maxW='90rem' mx='auto' p='4' justifyContent='space-between'>
        <HStack>
          <Link href='/'>
            <GameHubLogo />
          </Link>
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
