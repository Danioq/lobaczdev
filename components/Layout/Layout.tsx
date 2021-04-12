import Footer from '../Footer'
import Header from '../Header'
import { styled } from 'goober'
import { ReactElement } from 'react'
import { glob } from 'goober/global'
import { theme } from '../../styles/theme'

const Main = styled('main')(() => ({}))

glob`
body {
  background-color: ${theme.color.primary};
}
`

interface Props {
  children?: ReactElement
}
export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
