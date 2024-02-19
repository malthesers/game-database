import { HStack, Icon } from '@chakra-ui/react'
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa'
import { BsNintendoSwitch } from 'react-icons/bs'
import { ParentPlatform } from '../types'
import { IconType } from 'react-icons'

interface GamePlatformIconsProps {
  parentPlatforms: ParentPlatform[]
}

interface Icons {
  [key: string]: IconType
}

export default function GamePlatformIcons({ parentPlatforms }: GamePlatformIconsProps) {
  const platforms: string[] = parentPlatforms.map((platform) => platform.platform.slug)
  const icons: Icons = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    nintendo: BsNintendoSwitch,
    linux: FaLinux,
    mac: FaApple
  }

  return (
    <HStack p='2'>
      {platforms.map((platform: string) => (
        <Icon as={icons[platform]} key={platform} />
      ))}
    </HStack>
  )
}
