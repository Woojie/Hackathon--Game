import React, { Component } from 'react';
import './App.css';
import Board from'./Components/Board'
import Home from './Components/Home'
import {Switch,Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route path="/" exact render={(routerProps)=> <Home  {...routerProps}/>  } />
        <Route path="/board" render={ ()=> <Board bag={this.props.bag} />} />
      </Switch>
      </div>
    );
  }
}

export default App;
