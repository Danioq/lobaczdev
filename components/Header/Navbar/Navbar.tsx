import { styled } from 'goober'
import { Item } from './Item'

const List = styled('ul')(() => ({
  display: 'flex',
  listStyleType: 'none',
}))

interface Route {
  url: string
  text: string
}

export const Navbar = () => {
  const routing: Array<Route> = [
    {
      url: '/',
      text: 'Home',
    },
    {
      url: '/about',
      text: 'About',
    },
    {
      url: '/projects',
      text: 'Projects',
    },
  ]
  return (
    <List>
      {routing.map((route: Route) => (
        <Item {...route} key={route.text}/>
      ))}
    </List>
  )
}
