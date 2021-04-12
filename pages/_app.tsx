import { createElement, createContext, useContext } from 'react'
import { setup } from 'goober'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import { theme } from '../styles/theme'

const ThemeContext = createContext(theme)
const useTheme = () => useContext(ThemeContext)
setup(createElement, undefined, useTheme)

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
