import React from 'react'
import './card-list.styles.css'

import Card from '../card/card.component'

const cardList = props => {
  const { monsters } = props

  return (
    <div className='card-list'>
      {
        monsters.map(monster => (
          <Card
            key={monster.id}
            monster={monster}
          />
        ))
      }
    </div>
  )
}

export default cardList
