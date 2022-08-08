import * as React from 'react'
import '../scss/portfolio.module.scss'
import NavigationBar from '../components/NavigationBar'
import { Button, Container, Row } from 'react-bootstrap'

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
            <Button size='sm'
              href='https://docs.google.com/document/d/1qCgo6lXCTizieMTYZIFztEDsZXifV_3Sxfq1ILncjkI/edit?usp=sharing'
            >
              Curriculum - Resume
            </Button>
          </Row>
        </Container>
      </Container>
    </main>
  )
}

export default portfolioPage
