import { extendTheme, StyleFunctionProps, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  disableTransitionOnChange: false
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      color: mode('purple.800', 'white')(props),
      bg: mode('white', 'purple.800')(props)
    },
    header: {
      color: 'white',
      bg: 'purple.900'
    }
  })
}

// 3. extend the theme
const theme = extendTheme({ config, styles })

export default theme
