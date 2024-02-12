import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '../node_modules/@chakra-ui/react/dist/chakra-provider'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
