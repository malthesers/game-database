import { Button, Icon, useColorMode } from '@chakra-ui/react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

export default function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button
      onClick={toggleColorMode}
      className='preserve-3d'
      display='grid'
      placeContent='center'
      borderRadius='full'
      aspectRatio='1/1'
      transitionDuration='400ms'
      transitionTimingFunction='ease-in-out'
      transform={colorMode === 'light' ? 'rotateY(180deg)' : 'rotateY(0deg)'}
    >
      <Icon as={MdLightMode} gridArea='1/1/1/1' className='backface-hidden' />
      <Icon as={MdDarkMode} gridArea='1/1/1/1' className='backface-hidden' transform='rotateY(180deg)' />
    </Button>
  )
}
