import React from 'react'
import './card.sass'

const Card = ({ title, text, image}) => (
  <div className='card'>
    <img src={image} alt='title' />
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
)

export default Card
