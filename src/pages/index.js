import * as React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import * as style from '../scss/index.module.scss'
import NavigationBar from '../components/NavigationBar'
import _myPortraitImage from '../images/GM-Bunny.png'

const IndexPage = () => {
  return (
    <main>
      <NavigationBar />
      <Container fluid style={{ position: 'relative', top: '200px' }}>
        <Row>
          <Col fluid sm={2}>
            <Image
              rounded={true}
              fluid
              src={_myPortraitImage}
              alt={_myPortraitImage}
            />
          </Col>
          <Col>
            <p style={{ color: 'white' }}>
              This is more Personal experiments for how to style a website
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default IndexPage
