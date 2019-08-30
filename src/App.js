import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import logo from './logo.svg';
import './App.css';
import Reducer from "./middleware/Reducer.js";
import ReduxGame from "./components/ReduxGame.js"

let store = createStore(Reducer);

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
