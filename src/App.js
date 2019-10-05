import React, { Component } from 'react'
import CardList from './components/card-list/card-list.component'
import './App.css'

class App extends Component {
  state = {
    monsters: []
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => monsters.slice(0, 8))
      .then(slicedMonsters => this.setState({ monsters: slicedMonsters }))
  }

  render () {
    const { monsters } = this.state

    return (
      <div className='App'>
        <CardList monsters={monsters} />
      </div>
    )
  }
}

export default App
