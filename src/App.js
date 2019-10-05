import React, { Component } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBar from './components/search-bar/search-bar.component'
import './App.css'

class App extends Component {
  state = {
    monsters: [],
    searchText: ''
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => monsters.slice(0, 8))
      .then(slicedMonsters => this.setState({ monsters: slicedMonsters }))
  }

  handleChange = event => this.setState({ searchText: event.target.value.toLowerCase() })

  render () {
    const { monsters, searchText } = this.state

    const filteredMonsters = monsters.filter(monster => {
      const monsterName = monster.name.toLowerCase();

      return monsterName.includes(searchText)
    })

    return (
      <div className='App'>
        <h1>Your Monster Army</h1>
        <SearchBar
          placeholder='search monsters'
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
