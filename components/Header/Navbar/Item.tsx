import { styled, DefaultTheme } from 'goober'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface LiProps extends DefaultTheme {
  active: boolean
}

const ItemComponent = styled('li')((props: LiProps) => ({
  padding: '20px',
  fontSize: '1.5em',
  '& a': {
    color: props.theme.color.tertiary,
    textDecoration: 'none',
  },
  '& div': {
    opacity: props.active ? 1 : 0,
    width: props.active ? '100%' : '0%',
    height: '2px',
    backgroundColor: props.theme.color.tertiary,
    transition: 'all 300ms ease-out',
  },
  '&:hover': {
    '& div': {
      opacity: 1,
      width: '100%',
    },
  },
}))

interface Props {
  url: string
  text: string
}

export const Item = ({ url, text }: Props) => {
  const router = useRouter()
  return (
    <ItemComponent active={router.pathname === url}>
      <Link href={url}>{text}</Link>
      <div />
    </ItemComponent>
  )
}
