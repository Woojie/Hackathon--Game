import React, { Component } from 'react';
import './App.css';
import Board from'./Components/Board'
import Score from'./Components/Score'
import { Header } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header as='h1'>Urban Scrabble!  <Score /></Header>

        <Board />

      </div>
    );
  }
}

export default App;
