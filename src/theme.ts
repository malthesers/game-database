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
      color: mode('purple.900', 'white')(props),
      bg: mode('gray.50', 'purple.800')(props)
    },
    header: {
      bg: mode('gray.50', 'purple.900')(props)
    }
  })
}

// 3. extend the theme
const theme = extendTheme({ config, styles })

export default theme
