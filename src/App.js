import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './App.css';
import Reducer, { updateState } from "./middleware/Reducer.js";
import { ExampleGameState1 } from "./middleware/Example.js"
import ReduxGame from "./components/ReduxGame.js"

let store = createStore(Reducer);
store.dispatch(updateState(ExampleGameState1))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <ReduxGame/>
        </header>
      </div>
    </Provider>
  );
}

export default App;
