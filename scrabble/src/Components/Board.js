import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'

class Board extends Component {

  
  boardGame = (actualBoard, style) => {
    let rowsLength = 10
    let columnLength = 10
    for(let i = 0; i <= rowsLength-1; i++){
      actualBoard[i] = []
      for (let j = 0; j <= columnLength-1; j++ ){
      actualBoard[i][j] = <Grid.Column style={style}></Grid.Column>
      }
    }
    return actualBoard
  }
  render(){

  let style= {
    border: "solid .1px black"
  }

  let actualBoard= []
  this.boardGame(actualBoard, style)
  let newBoard = actualBoard.map((elem)=> (
  <Grid.Row>
  {elem}
  </Grid.Row>
  ))


return (
  <div>
    <Segment raised>
  <Grid  celled='internally' centered>
    {newBoard}
    </Grid>
    </Segment>
  </div>
)
}
}

export default Board