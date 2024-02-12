import { HStack, Switch, useColorMode } from '@chakra-ui/react'

export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack>
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Switch>
    </HStack>
  )
}
