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
  let {player1Count, player2Count} = this.props

  let style ={
    marginLeft: '5em'
  }
  let player1Color = player1Count >= player2Count ? 'green': 'red'
  let player2Color = player2Count >= player1Count ? 'green': 'red'
  return(
    <div>
    <Statistic.Group>
      <Statistic inverted color={player1Color}>
        <Statistic.Value>{this.props.player1Count}</Statistic.Value>
        <Statistic.Label>{player1}</Statistic.Label>
      </Statistic>
      <Statistic inverted color={player2Color}>
        <Statistic.Value>{this.props.player2Count}</Statistic.Value>
        <Statistic.Label>{player2}</Statistic.Label>
      </Statistic>
      <Statistic inverted floated='right' style={style}> 
        <Statistic.Value>{this.props.turn}</Statistic.Value>
        <Statistic.Label>Turn</Statistic.Label>
      </Statistic>
      <Statistic inverted floated='right'> 
        <Statistic.Value>{this.props.bag.length}</Statistic.Value>
        <Statistic.Label># of Tiles Left</Statistic.Label>
      </Statistic>
    </Statistic.Group>
    <Header  inverted as='h2'>{this.props.currentPlayer === 'player1' ?player1:player2}'s turn.</Header>

    
    </div>
  )
}

}

export default Score