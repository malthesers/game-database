import { Button, Icon, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react'
import { FaChevronCircleDown } from 'react-icons/fa'
import usePlatforms from '../hooks/usePlatforms'
import useGameQueryStore from '../stores'

export default function PlatformSelector() {
  const { data: platforms, isLoading } = usePlatforms()
  const chosenPlatform = useGameQueryStore((state) => state.queryParams.platform)
  const updatePlatform = useGameQueryStore((state) => state.setPlatform)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<Icon as={FaChevronCircleDown} />}>
        Platforms
      </MenuButton>
      {isLoading ? (
        <Spinner />
      ) : (
        <MenuList>
          {/* <MenuItem onClick={() => updatePlatform()}>All</MenuItem> */}
          {platforms?.results.map((platform) => (
            <MenuItem key={platform.slug} onClick={() => updatePlatform(platform)}>
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      )}
    </Menu>
  )
}
