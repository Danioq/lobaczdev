import Head from 'next/head'
import { styled } from 'goober'

interface HelloProps {
  color?: string
}

const Hello = styled('p')((props: HelloProps) => ({
  color: props.color || 'red',
  fontSize: '10em',
  '&:hover': {
    color: 'blue',
  },
}))

const Home = () => {
  return (
    <div>
      <Head>
        <title>lobacz.dev</title>
      </Head>
      <Hello color=''>Hi</Hello>
    </div>
  )
}

export default Home
