import React, { Component } from 'react'
import {Header, Modal, Segment, Button, Icon } from 'semantic-ui-react'
import axios from 'axios'

const EndGame = ({player1Count, player2Count}) =>{
  axios.post('http://localhost:8080/scores', {
    player1Score: player1Count,
    player2Score: player2Count
  })
  let winner = player1Count > player2Count ? 'Mathew':"Neha"
  return(
  <div>
  <Modal.Content>
  <center><Header as='h1'>Game Over</Header></center>
  <Segment raised >
    <Header as='h3'>{winner} has won!!</Header>
  </Segment>
</Modal.Content>
<Modal.Actions>
<Button floated='right' color='green' onClick={()=>window.location.reload()} inverted>
<Icon name='checkmark' /> Play Again
</Button>
</Modal.Actions>
</div>
)
}
export default EndGame