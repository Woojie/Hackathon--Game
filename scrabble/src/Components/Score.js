import React, { Component } from 'react'
import { Statistic, Header} from 'semantic-ui-react'
import axios from 'axios'

class Score extends Component {
state={
  player1: "",
  player2: "",
}
componentDidMount(){
  axios.get('http://localhost:8080/scores')
  .then((res)=>{
    this.setState({player1 : res.data[0].name, player2:res.data[1].name})
  })
}
render(){
  let {player1, player2} = this.state
  return(
    <div>
    <Statistic.Group>
      <Statistic>
        <Statistic.Value>{this.props.player1Count}</Statistic.Value>
        <Statistic.Label>{player1}</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{this.props.player2Count}</Statistic.Value>
        <Statistic.Label>{player2}</Statistic.Label>
      </Statistic>
    </Statistic.Group>
    <Header as='h2'>{this.props.currentPlayer === 'player1' ?player1:player2}'s turn.</Header>
    </div>
  )
}

}

export default Score