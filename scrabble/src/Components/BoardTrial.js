import React, { Component } from 'react'
import { Grid, Segment, Button } from 'semantic-ui-react'

class BoardTrial extends Component {
  state ={

  }
  onBoardClick = (i, j) =>{
    console.log(`hello ${i} + ${j}`)
  }

  boardGame = (actualBoard) => {
    let rowsLength = 10
    let columnLength = 10
    for(let i = 0; i <= rowsLength-1; i++){
      actualBoard[i] = []
      for (let j = 0; j <= columnLength-1; j++ ){
      actualBoard[i][j] = <Grid.Column ><Button size='large' inverted color="red" onClick={()=>this.onBoardClick(i,j)}/></Grid.Column>
      }
    }
    return actualBoard
  }
  render(){

  let actualBoard= []
  this.boardGame(actualBoard)
  actualBoard[2][3] = <Grid.Column><h3>S</h3></Grid.Column>
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
)}
}

export default BoardTrial