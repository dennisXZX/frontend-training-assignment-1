import React from 'react'
import './card.styles.css'

const Card = props => {
  const { monster } = props
  const robotUrl = `https://robohash.org/${monster.id}?set=set1&size=220x220`;

  return (
    <div className='card-container'>
      <img alt={monster.name} src={robotUrl} />
      <h2>{monster.name}</h2>
      <div>{monster.email}</div>
    </div>
  )
}

export default Card
