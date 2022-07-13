import * as React from 'react'
import { Container } from 'react-bootstrap'
import '../scss/index.module.scss'
import PortraitCard from '../components/portraitCard'
import NavigationBar from '../components/NavigationBar'
import _myPortraitImage from '../images/portrait.jpg'

const IndexPage = () => {
  return (
    <main>
      <NavigationBar />

      <Container fluid>
        <h1>
          My name is Gilberto Moreno & I'm a Game Dev/Software engineer from
          Panama
        </h1>
        <Container>
          <PortraitCard
            // titleText={'Hello My name is Gilberto Moreno'}
            // cardContent={''}
            cardImage={_myPortraitImage}
          />
        </Container>
      </Container>
    </main>
  )
}

export default IndexPage
