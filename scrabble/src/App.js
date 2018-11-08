import React, { Component } from 'react';
import './App.css';
import Board from'./Components/Board'
import Validate from './Components/Validate'
import { Header } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header as='h1'>Urban Scrabble!</Header>
        <Board />
        <Validate />
      </div>
    );
  }
}

export default App;
