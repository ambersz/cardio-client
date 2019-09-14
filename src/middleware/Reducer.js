const UpdateState = "update"

function baseState(){
  let state = {};

  return { state, id:0, previousStates: [state] };
}

function Reducer(state, action){
  if(state === undefined) return baseState();
  if(action.type === UpdateState){
    let newState = action.state;
    let returnState = {...state};
    returnState.state = newState;
    returnState.previousStates = returnState.previousStates.concat(newState);
    returnState.id++;
    return returnState;
  }
};

function updateState(newState){
  return {
    type: UpdateState,
    state: newState,
  }
}

export default Reducer;

export { updateState };
