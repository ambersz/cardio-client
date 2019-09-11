import React from "react"

class Game extends React.Component{
  render(){
    return (
      <body>
        <section>
          <h1>{JSON.stringify(this.props.state.hands[1][0].id)}</h1>
          <p>
            {"number: "}
            {JSON.stringify(this.props.state.hands[1][0].number)}
          </p>
          <p>
            {"color: "}
            {JSON.stringify(this.props.state.hands[1][0].color)}
          </p>
        </section>
        <section>
          <h1>{JSON.stringify(this.props.state.hands[1][1].id)}</h1>
          <p>
            {"number: "}
            {JSON.stringify(this.props.state.hands[1][1].number)}
          </p>
          <p>
            {"color: "}
            {JSON.stringify(this.props.state.hands[1][1].color)}
          </p>
        </section>
        <section>
          <h1>{JSON.stringify(this.props.state.hands[1][2].id)}</h1>
          <p>
            {"number: "}
            {JSON.stringify(this.props.state.hands[1][2].number)}
          </p>
          <p>
            {"color: "}
            {JSON.stringify(this.props.state.hands[1][2].color)}
          </p>
        </section>
        <section>
          <h1>{JSON.stringify(this.props.state.hands[1][3].id)}</h1>
          <p>
            {"number: "}
            {JSON.stringify(this.props.state.hands[1][3].number)}
          </p>
          <p>
            {"color: "}
            {JSON.stringify(this.props.state.hands[1][3].color)}
          </p>
        </section>
        <section>
          <h1>{JSON.stringify(this.props.state.hands[1][4].id)}</h1>
          <p>
            {"number: "}
            {JSON.stringify(this.props.state.hands[1][4].number)}
          </p>
          <p>
            {"color: "}
            {JSON.stringify(this.props.state.hands[1][4].color)}
          </p>
        </section>
        </body>
    )
  }
}

export default Game;
