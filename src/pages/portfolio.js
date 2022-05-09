import * as React from 'react'
import '../scss/index.module.scss'
import '../scss/portfolio.module.scss'
import NavigationBar from '../components/NavigationBar'
import { Container } from 'react-bootstrap'

const portfolioPage = () => {
  return (
    <main>
      <NavigationBar />
      <h1>Hello :D welcome to my portfolio</h1>
      <Container>
        <p>Coming Soon!</p>
      </Container>
    </main>
  )
}

export default portfolioPage
