import { Button, Icon, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react'
import { FaChevronCircleDown } from 'react-icons/fa'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../types'

interface PlatformSelectorProps {
  updatePlatform: (platform?: Platform) => void
  chosenPlatform: Platform | null
}

export default function PlatformSelector({ chosenPlatform, updatePlatform }: PlatformSelectorProps) {
  const { data: platforms, loaded } = usePlatforms()

  console.log(chosenPlatform)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<Icon as={FaChevronCircleDown} />}>
        Platforms
      </MenuButton>
      {!loaded ? (
        <Spinner />
      ) : (
        <MenuList>
          <MenuItem onClick={() => updatePlatform()}>All</MenuItem>
          {platforms?.map((platform) => (
            <MenuItem key={platform.slug} onClick={() => updatePlatform(platform)}>
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      )}
    </Menu>
  )
}
