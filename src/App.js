import React, { Component } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBar from './components/search-bar/search-bar.component'
import Title from './components/title/title.component'
import './App.css'
import NoResult from './components/no-result/no-result.component'

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

    const isNoResult = filteredMonsters.length <= 0;

    return (
      <div className='App'>
        <Title title="Your Monster Army" />
        <SearchBar
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />

        <NoResult
          message="No Search Results!"
          isNoResult={isNoResult}
        />
      </div>
    )
  }
}

export default App
