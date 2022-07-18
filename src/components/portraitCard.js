import * as React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import * as styles from '../scss/portraitCard.module.scss'

const PortraitCard = ({
  titleText,
  optionalSubtitle,
  cardContent,
  cardImage
}) => {
  return (
    <Container fluid='md'>
      <Row md={3}>
        <Row lg={2}>
          <Image
            className={styles.cardImg}
            src={cardImage}
            alt={cardImage}
          ></Image>
        </Row>
        <Row>
          <p style={{ color: 'white' }}>I make videogames and other things</p>
        </Row>
      </Row>
    </Container>

    // <div className='card' style={cardStyle}>
    //   <div className='card-body'>
    //     <h5 className='card-title'>{titleText}</h5>
    //     <Image rounded='true' src={cardImage} alt={cardImage}></Image>
    //     <img className={styles.cardImg}></img>
    //     <h6 className='card-subtitle mb-2 text-muted'>{optionalSubtitle}</h6>
    //     <p className='card-text'>{cardContent}</p>
    //   </div>
    // </div>
  )
}

export default PortraitCard
