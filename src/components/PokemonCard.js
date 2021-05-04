import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    front: true
  }
  
  render() {
    const { name, hp, sprites } = this.props.poke

    return (
      <Card>
        <div onClick={() => this.setState({ front: !this.state.front })}>
          <div className="image">
            <img src={this.state.front ? sprites.front : sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{ name }</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              { hp }
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
