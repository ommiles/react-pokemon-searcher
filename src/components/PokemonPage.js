import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    filteredPokemon: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokeArr => this.setState({ pokemon: pokeArr, filteredPokemon: pokeArr }))
  }


  search = (e) => {
    let filteredArr
    // 0 would be a falsy value
    e.target.value.length ? filteredArr = this.state.pokemon.filter(poke => poke.name.includes(e.target.value)) : filteredArr = this.state.pokemon
    this.setState({ 
      filteredPokemon: filteredArr 
    })
  }

  addPokemon = (pokeData) => {
    const { name, hp, frontUrl, backUrl } = pokeData
    const newPoke = {
      name,
      hp, 
      sprites: {
        front: frontUrl,
        back: backUrl 
      }
    }
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(newPoke)
    }
    fetch('http://localhost:3000/pokemon', config)
    .then(res => res.json())
    .then(newPoke => {
      this.setState({
        pokemon: [newPoke, ...this.state.pokemon],
        filteredPokemon: [newPoke, ...this.state.filteredPokemon]
      })
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search search={this.search} />
        <br />
        <PokemonCollection pokemon={this.state.filteredPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
