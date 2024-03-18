import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { FaSearch } from 'react-icons/fa'

interface SearchInputProps {
  updateSearch: (input: string) => void
}

export default function SearchInput({ updateSearch }: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        updateSearch(inputRef.current?.value || '')
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <Icon as={FaSearch} />
        </InputLeftElement>
        <Input
          ref={inputRef}
          borderRadius='full'
          placeholder='Search games...'
          variant='filled'
          _focus={{
            borderColor: 'white'
          }}
        ></Input>
      </InputGroup>
    </form>
  )
}
