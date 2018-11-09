import React from 'react'
import {Header, Divider, Popup} from 'semantic-ui-react'

const Tutorial = () =>(
  <Popup.Content>
    <Header as='h1'>How to play!</Header>
      <p>The game will be played between two players each taking turns.</p>
      <p>There are 100 tiles in the bag where each tile has a letter and a point value.</p>
      <Divider />
      <p>At each turn, a player gets a random set of 7 tiles which they will attempt to submit a word that can be found in Urban Dictionary.</p>
      <p>If they word exists, the point value of each tile used will be added to the player's score.</p>
      <p>If you submit a word that does not exist, you lose 25% of your total points and your turn.</p>
      <Divider />
      <p>The game will go on until there are no more tiles in the bag.</p>
  </Popup.Content>
)

export default Tutorial