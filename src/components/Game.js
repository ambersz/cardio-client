import React from "react"

class Game extends React.Component{
  render(){
    let state = this.props.state.state;

    return (
      <div>
      <h1>
      Change this code
      </h1>
      <p>
        {JSON.stringify(state)}
      </p>
      </div>
    )
  }
}

export default Game;
