import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

export default function SearchInput() {
  return (
    <InputGroup maxW='20rem'>
      <InputLeftElement>
        <Icon as={FaSearch} />
      </InputLeftElement>
      <Input
        borderRadius='full'
        placeholder='Search games...'
        variant='filled'
        _focus={{
          borderColor: 'white'
        }}
      ></Input>
    </InputGroup>
  )
}
