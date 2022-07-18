import * as React from 'react'
import { Container } from 'react-bootstrap'
import * as style from '../scss/index.module.scss'
import PortraitCard from '../components/PortraitCard'
import NavigationBar from '../components/NavigationBar'
import _myPortraitImage from '../images/GM-Bunny.png'

const IndexPage = () => {
  return (
    <main>
      <NavigationBar />

      <Container>
        <h1 className={style.titleText}>
          My name is Gilberto Moreno & I'm a Game Dev/Software engineer from
          Panama
        </h1>
        <Container>
          <PortraitCard cardImage={_myPortraitImage} style={{size:'20px'}} />
        </Container>
      </Container>
    </main>
  )
}

export default IndexPage
