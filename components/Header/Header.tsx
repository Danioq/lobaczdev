import Navbar from './Navbar'
import { styled } from 'goober'

const Nav = styled('nav')(() => ({
  display: 'flex',
}))

export const Header = () => {
  return (
    <Nav>
      <h1>Logo</h1>
      <Navbar />
    </Nav>
  )
}
