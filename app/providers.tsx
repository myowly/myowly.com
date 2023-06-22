'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { Inter, Staatliches } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const staatliches = Staatliches({ weight: '400', subsets: ['latin'] })

const colors = {
  'eucalyptus': '#46e0bb',
  'keppel': '#3bbfa1',
  'sherwood-green': '#093f32',
  'fulvous': '#e67a04',
  'indian-yellow': '#ee9e4e',
  "spanish-orange": '#E46500',
  'saddle-brown': '#8e420c',
  'grey': '#bdbdbd',
  'vampire-black': '#0b0b0b',
  'black-bean': '#081b17',
  'black': '#000000',
  'cultured': '#f6f6f6',
  'transparent': 'transparent'
}

const stepperTheme = {
  baseStyle: {
    indicator: {
      height: '20px',
      width: '20px',
      margin: '7px',
      _active: {
        bgColor: "fulvous"
      }
    },
    separator: {
      bgColor: "vampire-black"
    }
  }
}

// Extend the theme to include custom colors, fonts, etc
export const theme = extendTheme(
  {
    colors,
    fonts: {
      heading: `${staatliches.style.fontFamily}, sans-serif`,
      body: `${inter.style.fontFamily}, sans-serif`,
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
    components: {
      Stepper: stepperTheme,
    },
  },
  withDefaultColorScheme({ colorScheme: 'vampire-black' })
)

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
