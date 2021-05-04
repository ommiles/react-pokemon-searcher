import React from 'react'

const Search = props => {
  // Search is the only functional component
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={props.search} className="prompt"/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
