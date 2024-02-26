import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(menuAnatomy.keys)

const baseStyle = definePartsStyle({
  list: {
    _dark: {
      '--menu-bg': 'purple.900'
    }
  },
  item: {
    _dark: {
      color: 'white',
      bg: 'purple.900',
      _hover: {
        bg: 'purple.800'
      },
      _focus: {
        bg: 'purple.800'
      }
    }
  }
})

export const menuTheme = defineMultiStyleConfig({ baseStyle })
