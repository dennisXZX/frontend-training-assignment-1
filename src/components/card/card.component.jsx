import React from 'react'
import './card.styles.css'

const Card = props => {
  const { monster: { email, name, id } } = props
  const robotUrl = `https://robohash.org/${id}?set=set1&size=220x220`;

  return (
    <div className='card-container'>
      <img alt={name} src={robotUrl} />
      <h2>{name}</h2>
      <div>{email}</div>
    </div>
  )
}

export default Card
