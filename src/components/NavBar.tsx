import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'

export default function NavBar() {
  return (
    <header>
      <HStack padding='0.5rem' justifyContent='space-between'>
        <HStack>
          <Image src={logo} boxSize='60px'></Image>
          <Text>NavBar</Text>
        </HStack>
        <div>
          <ColorModeSwitch></ColorModeSwitch>
        </div>
      </HStack>
    </header>
  )
}
