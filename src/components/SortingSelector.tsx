import { Button, Icon, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { FaChevronCircleDown } from 'react-icons/fa'

interface SortingSelectorProps {
  updateSorting: (sorting: string) => void
  sorting: string
}

interface SortingOptions {
  [key: string]: string
}

export default function SortingSelector({ sorting, updateSorting }: SortingSelectorProps) {
  const sortingOptions: SortingOptions = {
    '-relevance': '',
    name: 'Name',
    '-released': 'Relase date',
    '-added': 'Date added',
    '-rating': 'Rating'
  }

  console.log(sorting)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<Icon as={FaChevronCircleDown} />}>
        <Text as='span'>Order by: </Text>
        <Text as='span' fontWeight='700'>
          {sortingOptions[sorting]}
        </Text>
      </MenuButton>
      <MenuList>
        {Object.entries(sortingOptions).map(([key, value]) => (
          <MenuItem key={key} onClick={() => updateSorting(key)}>
            {value}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
