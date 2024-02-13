import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../../assets/logo.webp'
import ThemeSwitcher from './ThemeSwitcher'

export default function NavBar() {
  return (
    <HStack as='header' bg='rgba(0, 0, 0, 0.2)'>
      <HStack w='100%' maxW='90rem' mx='auto' px='4' py='2' justifyContent='space-between'>
        <HStack>
          <Image src={logo} boxSize='60px'></Image>
          <Text fontWeight='bold'>Games</Text>
        </HStack>
        <div>
          <ThemeSwitcher></ThemeSwitcher>
        </div>
      </HStack>
    </HStack>
  )
}
