import React from "react"

class Game extends React.Component{
  render(){
    return (
      <div>
      <h1>
      Change this code
      </h1>
      <p>
        {JSON.stringify(this.props.state)}
      </p>
      </div>
    )
  }
}

export default Game;
