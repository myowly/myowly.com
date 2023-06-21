'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  'eucalyptus': '#46e0bb',
  'keppel': '#3bbfa1',
  'sherwood-green': '#093f32',
  'fulvous': '#e67a04',
  'indian-yellow': '#ee9e4e',
  'saddle-brown': '#8e420c',
  'grey': '#bdbdbd',
  'vampire-black': '#0b0b0b',
  'black-bean': '#081b17',
  'black': '#000000',
  'cultured': '#f6f6f6',
  'transparent': 'transparent'
}
  
export const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Staatliches', sans-serif`,
    body: `'Inter', sans-serif`,
  },
})  

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}