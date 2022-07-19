import * as React from 'react'
import { Container, Row, Image, Col } from 'react-bootstrap'
import * as style from '../scss/index.module.scss'
import NavigationBar from '../components/NavigationBar'
import _myPortraitImage from '../images/GM-Bunny.png'

const IndexPage = () => {
  return (
    <main>
      <NavigationBar />

      <Container fluid>
        <Container>
          <Row>
            <h1 className={style.titleText}>
              My name is Gilberto Moreno & I'm a Game Dev/Software engineer from
              Panama
            </h1>
          </Row>
          <Row>
            <Col>
              <Image
                src={_myPortraitImage}
                alt={_myPortraitImage}
                rounded
              />
            </Col>
            <Col>
              <p>Another text example right here</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </main>
  )
}

export default IndexPage
