import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = () => {
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
    this.props.addPokemon(this.state)
  }

  renderInputs = () => {
    return[ 'name', 'hp', 'frontUrl', 'backUrl' ].map((inputName, ipx) => {
      return(
        <Form.Input
        key={inputName + ipx}
        fluid label={inputName}
        placeholder={inputName}
        name={inputName}
        value={this.state[`${inputName}`]}
        onChange={this.handleChange} />
      )
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            {this.renderInputs()}
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
