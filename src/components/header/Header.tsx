import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../../assets/logo.webp'
import ThemeSwitcher from './ThemeSwitcher'

export default function Header() {
  return (
    <HStack as='header'>
      <HStack w='100%' maxW='90rem' mx='auto' px='4' py='2' justifyContent='space-between'>
        <HStack>
          <Image src={logo} boxSize='60px'></Image>
          <Text fontSize='2xl' fontWeight='bold'>
            GameHub
          </Text>
        </HStack>
        <ThemeSwitcher></ThemeSwitcher>
      </HStack>
    </HStack>
  )
}
