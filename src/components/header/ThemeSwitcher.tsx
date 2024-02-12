import { Button, HStack, Switch, useColorMode } from '@chakra-ui/react'

export default function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack>
      {/* <Switch onChange={toggleColorMode} isChecked={colorMode === 'dark'}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Switch> */}
      <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
    </HStack>
  )
}
