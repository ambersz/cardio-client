import Game from './Game.js'
import { connect } from 'react-redux'

let mapStateToProps = function(state, props){
  return{
    ...props,
    state:state,
  }
}

export default connect(mapStateToProps)(Game);
