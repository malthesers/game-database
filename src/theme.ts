import { extendTheme, StyleFunctionProps, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { menuTheme } from './themes/menu'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  disableTransitionOnChange: false
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      color: mode('black', 'white')(props),
      bg: mode('gray.200', 'purple.800')(props)
    },
    header: {
      bg: mode('gray.50', 'purple.900')(props)
    },
    aside: {
      bg: mode('gray.50', 'purple.900')(props)
    },
    article: {
      bg: mode('gray.50 !important', 'purple.900 !important')(props)
    }
  })
}

const theme = extendTheme({
  config,
  styles
  // components: {
  //   Menu: menuTheme
  // }
})

export default theme
