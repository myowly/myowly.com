'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
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
// Extend the theme to include custom colors, fonts, etc
export const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Staatliches', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: {
      p: {
        color: 'cultured',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '21px',
      },
    },
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
