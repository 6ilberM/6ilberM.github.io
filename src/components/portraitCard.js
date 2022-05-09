import * as React from 'react'
import {} from 'react-bootstrap'
import * as styles from '../scss/portraitCard.module.scss'

const cardStyle = {
  width: '18.25rem',
  borderRadius: '25%'
}

const PortraitCard = ({
  titleText,
  optionalSubtitle,
  cardContent,
  cardImage
}) => {
  return (
    <div className='card' style={cardStyle}>
      <div className='card-body'>
        <h5 className='card-title'>{titleText}</h5>
        <img className={styles.cardImg} src={cardImage} alt={cardImage}></img>
        <h6 className='card-subtitle mb-2 text-muted'>{optionalSubtitle}</h6>
        <p className='card-text'>{cardContent}</p>
      </div>
    </div>
  )
}

export default PortraitCard
