import * as React from 'react'
import '../scss/portfolio.module.scss'
import NavigationBar from '../components/NavigationBar'
import { Container, Row } from 'react-bootstrap'

const content_style = {
  position: 'relative'
}

const portfolioPage = () => {
  return (
    <main>
      <NavigationBar />
      <Container fluid style={content_style}>
        <Container>
          <Row>
            <h1>Hello! My name is Gilberto Marcel Moreno!</h1>
            <h2>I'm a gameplay programmer form Panama!</h2>
          </Row>
        </Container>
      </Container>
    </main>
  )
}

export default portfolioPage
