import * as React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import * as style from '../scss/index.module.scss'
import NavigationBar from '../components/NavigationBar'
import _myPortraitImage from '../images/GM-Bunny.png'

const IndexPage = () => {
  return (
    <main>
      <NavigationBar />
      <Container>
        <Row>
          <Col>
            <Image fluid src={_myPortraitImage} alt={_myPortraitImage} />
          </Col>
          <Col>
            <Image fluid src={_myPortraitImage} alt={_myPortraitImage} />
          </Col>{' '}
          <Col>
            <Image fluid src={_myPortraitImage} alt={_myPortraitImage} />
          </Col>{' '}
          <Col>
            <Image fluid src={_myPortraitImage} alt={_myPortraitImage} />
          </Col>{' '}
          <Col>
            <Image fluid src={_myPortraitImage} alt={_myPortraitImage} />
          </Col>{' '}
          <Col>
            <Image fluid src={_myPortraitImage} alt={_myPortraitImage} />
          </Col>{' '}
          <Col>
            <Image fluid src={_myPortraitImage} alt={_myPortraitImage} />
          </Col>{' '}
          <Col>
            <Image fluid src={_myPortraitImage} alt={_myPortraitImage} />
          </Col>{' '}
          <Col>
            <Image fluid src={_myPortraitImage} alt={_myPortraitImage} />
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default IndexPage
