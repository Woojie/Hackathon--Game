import React, { Component } from 'react';
import './App.css';
import Board from'./Components/Board'
import Validate from './Components/Validate'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Board />
        <Validate />
      </div>
    );
  }
}

export default App;
