import React from 'react'
import {Header, Modal, Segment, Button, Icon } from 'semantic-ui-react'
import axios from 'axios'
import '../App.css';
const EndGame = ({player1Count, player2Count}) =>{
  axios.post('http://localhost:8080/scores', {
    player1Score: player1Count,
    player2Score: player2Count
  })
  let winner = player1Count > player2Count ? 'Mathew':"Neha"
  return(
  <div>
  <Modal.Content>
  {/* <center><Header as='h1' id="gameOver" >Game Over!!</Header></center> */}
<img src="./images/gameover.jpg" alt="" width="900" height="400"/>
  <Segment raised > 
  <center>
    <Header as='h3' id="winnerStyle">Yippie!! {winner} has won!!</Header>
    <Header as='h4' id="winnerStyle1">Mathew's score: {player1Count} & Neha's score: {player2Count} </Header>
    </center>
  </Segment>
 <Button size='large' floated='right' color='green' onClick={()=>window.location.reload()} inverted>
<Icon name='checkmark' /> Play Again
</Button>
</Modal.Content>
</div>
)
}
export default EndGame