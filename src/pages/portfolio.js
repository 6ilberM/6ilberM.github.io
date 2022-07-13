import { Link } from 'gatsby'
import * as React from 'react'
import '../scss/portfolio.module.scss'
import NavigationBar from '../components/NavigationBar'
import { Container } from 'react-bootstrap'

const portfolioPage = () => {
  return (
    <main>
      <NavigationBar />
      <h1>Hello :D welcome to my portfolio</h1>
      <Container>
        <p>
          Consider Making something that listens to another Mdx file to display
          info of each game or project that I've experimented on... Perhaps more
          compartamentalization will result in an easier time making this...
        </p>
      </Container>
      <Link className='btn btn-dark' to='/'>
        Home
      </Link>
    </main>
  )
}

export default portfolioPage
