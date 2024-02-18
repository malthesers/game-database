import { HStack, Text } from '@chakra-ui/react'
import ThemeSwitcher from './ThemeSwitcher'
import GameHubLogo from '../icons/GameHubLogo'

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
        <ThemeSwitcher></ThemeSwitcher>
      </HStack>
    </HStack>
  )
}
