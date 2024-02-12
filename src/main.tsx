import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '../node_modules/@chakra-ui/react/dist/chakra-provider'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme.ts'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}></ColorModeScript>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
