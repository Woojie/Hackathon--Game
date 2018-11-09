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
  let {player1, player2} = this.state
  return(
    <div>
    <Statistic.Group>
      <Statistic>
        <Statistic.Value>{player1.score}</Statistic.Value>
        <Statistic.Label>{player1.name}</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{player2.score}</Statistic.Value>
        <Statistic.Label>{player2.name}</Statistic.Label>
      </Statistic>
    </Statistic.Group>
    <Header as='h2'>{this.props.currentPlayer === 'player1' ?player1.name:player2.name}'s turn.</Header>
    </div>
  )
}

}

export default Score