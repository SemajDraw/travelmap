import '@fontsource/great-vibes';

import { SessionProvider } from "next-auth/react"
import { ChakraProvider } from '@chakra-ui/react'

import { transitions, positions, Provider as AlertProvider } from 'react-alert'

import theme from '../theme'
import { AppProps } from 'next/app'

import '../styles.scss';
import { Alert } from "../components/Alert"

const alertOptions = {
  position: positions.BOTTOM_RIGHT,
  timeout: 5000,
  transition: transitions.SCALE
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider resetCSS theme={theme}>
        <AlertProvider template={Alert} {...alertOptions}>
          <Component {...pageProps} />
        </AlertProvider>
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp
