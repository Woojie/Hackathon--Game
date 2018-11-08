import React, { Component } from 'react';
import { Header} from 'semantic-ui-react'
import './App.css';
import Board from'./Components/Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header as='h1'>Urban Scrabble!</Header>
        <Board />
      </div>
    );
  }
}

export default App;
