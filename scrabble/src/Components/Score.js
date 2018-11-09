import React, { Component } from 'react'
import { Statistic, Header} from 'semantic-ui-react'
import axios from 'axios'

class Score extends Component {
state={
  player1: {},
  player2: {},
}
componentDidMount(){
  axios.get('http://localhost:8080/scores')
  .then((res)=>{

    this.setState({player1 : res.data.player1, player2:res.data.player2})
  })
}
render(){
  return(
    <div>
    <Statistic.Group>
      <Statistic>
        <Statistic.Value>{this.state.player1.score}</Statistic.Value>
        <Statistic.Label>{this.state.player1.name}</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{this.state.player2.score}</Statistic.Value>
        <Statistic.Label>{this.state.player2.name}</Statistic.Label>
      </Statistic>
    </Statistic.Group>
    <Header as='h2'>{this.state.player1.name}'s turn.</Header>
    </div>
  )
}

}

export default Score