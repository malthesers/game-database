import { Button, HStack, Icon, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react'
import { FaChevronCircleDown } from 'react-icons/fa'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../types'

interface PlatformSelectorProps {
  updatePlatform: (platform: Platform) => void
  chosenPlatform: Platform | null
}

export default function PlatformSelector({ chosenPlatform, updatePlatform }: PlatformSelectorProps) {
  const { data: platforms, error, loaded } = usePlatforms()

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<Icon as={FaChevronCircleDown} />}>
        Platforms
      </MenuButton>
      {!loaded ? (
        <Spinner />
      ) : (
        <MenuList>
          {platforms?.map((platform) => (
            <MenuItem onClick={() => updatePlatform(platform)} key={platform.slug}>
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      )}
    </Menu>
  )
}
