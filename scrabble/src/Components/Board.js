import React, { Component } from 'react'
import {Header, Form, Button, Modal, Divider, Icon, Segment} from 'semantic-ui-react'
import axios from 'axios'
import PlayerOneTiles from './PlayerOneTiles'
import Score from'./Score'

class Board extends Component {
  state = {
    wordExist: true,
    textResult: [],
    info: "",
    currentPlayer: 'player1',
    modalOpen: false ,
    bag: this.props.bag,
    player1: [],
    player2: [],
    player1Count: 0,
    player2Count: 0,
    total: 0 , 
    turn: 0
}

  componentDidMount (){
      let {bag, currentPlayer} = this.state
    if(currentPlayer === 'player1'){
      let newPlayer = []
      for (let i = 0 ;i< 7; i++){
      newPlayer = newPlayer.concat(bag.splice(Math.floor(Math.random()*bag.length),1))}
      this.setState({
        player1: newPlayer
      })
    }else{
      let newPlayer = []
      for (let i = 0 ;i< 7; i++){
      newPlayer = newPlayer.concat(bag.splice(Math.floor(Math.random()*bag.length),1))}
      this.setState({
        player2: newPlayer
      })
    }
    
  }


deleteText = (name, score, index) =>{
  let obj = {
      name: name,
      value: score
  }
  let newHand = this.state.textResult
  newHand.splice(index, 1)

if (this.state.currentPlayer==='player1'){
  this.setState({
    textResult: newHand,
    player1: this.state.player1.concat(obj)
  })
}else{
  this.setState({
    textResult: newHand,
    player2: this.state.player2.concat(obj)
  })
}

}

addText = (name, score, index ) =>{
  let obj = {
      name: name,
      value: score
  }


if(this.state.currentPlayer ==='player1'){
  let newHand = this.state.player1
  newHand.splice(index, 1)
  this.setState({
    player1: newHand,
    textResult: this.state.textResult.concat(obj)
  })
}else{
  let newHand = this.state.player2
  newHand.splice(index, 1)
  this.setState({
    player2: newHand,
    textResult: this.state.textResult.concat(obj)
  })
}

}

search = () => {
  let newAlpha= ""
this.state.textResult.forEach((elem)=>(
  newAlpha = newAlpha + elem.name
))
axios.get(`http://api.urbandictionary.com/v0/define?term=${newAlpha}`)
.then (res => {
    let data = res.data.list
    this.setState({
       wordExist:  data.length > 0 ? true : false,


    }, ()=>{
      if (this.state.wordExist){
        this.ifTrue(res.data.list[0])
      }else{
        if(this.state.currentPlayer==='player1'){
          this.setState({
            player1: this.state.player1.concat(this.state.textResult),
            textResult:[],
          })
        }else{
          this.setState({
            player2: this.state.player2.concat(this.state.textResult),
            textResult:[],
          })
        }

      }
    })
})
}

ifTrue= (data) =>{
  let {turn} = this.state
  let newPlayer = this.state.currentPlayer === 'player1' ? 'player2' : 'player1'
  let total = 0
  this.state.textResult.forEach((elem)=>(
    total = total+ elem.value
  ))
  if(turn === 3 || turn === 4 || turn === 10 || turn ===11){
    total = total * 2
  }else if(turn === 7 || turn === 8){
    total =total*3
  }
  if (this.state.currentPlayer ==='player1'){
    this.setState({
      info: data,
      currentPlayer: newPlayer,
      player1Count: this.state.player1Count + total,
      total
    }, ()=>{
      
      this.clearData()})
  }else{
    this.setState({
      info: data,
      currentPlayer: newPlayer,
      player2Count: this.state.player2Count + total,
      total,
    }, () =>{
      this.clearData()})
  }
  }



clearData = () => {
  let {currentPlayer, bag} = this.state
  if(currentPlayer === 'player2'){
    let newPlayer = []
    for (let i = 0 ;i< 7; i++){
    newPlayer = newPlayer.concat(bag.splice(Math.floor(Math.random()*bag.length),1))}
    this.setState({
      player2: newPlayer,
      textResult: [],
      turn: this.state.turn+1
    })
  }else{
    let newPlayer = []
    for (let i = 0 ;i< 7; i++){
    newPlayer = newPlayer.concat(bag.splice(Math.floor(Math.random()*bag.length),1))}
    this.setState({
      player1: newPlayer,
      textResult: [],
      turn: this.state.turn+1
    })
  }
}


  handleModalOpen = () => this.setState({ modalOpen: true })

  handleModalClose = () => {this.setState({ modalOpen: false }, ()=>{})}



  render(){
    const {bag, turn, wordExist, currentPlayer, player1, player2, total, player1Count, player2Count, modalOpen, info, textResult} = this.state
    let errorMsg = wordExist ? 'Great Word!' : 'Oops Word does not exist, Please Try Again!'
    let visible = {
      display: wordExist ? '': 'none'
    }
    let bonusTurn = turn === 3 ||turn === 4 || turn ===10 ||turn=== 11 ? <Header inverted color="blue" as='h1'>DOUBLE POINTS</Header> : ""
    let tripleTurn = turn === 7 || turn === 8 ? <Header inverted color="blue" as='h1'>TRIPLE POINTS</Header> : ""


    return(
      <div>
      <Score turn={turn} bag={bag} currentPlayer={currentPlayer} player1Count={player1Count} player2Count={player2Count} />
      {bonusTurn}
      {tripleTurn}
      <PlayerOneTiles player1={player1} player2={player2} textResult={textResult} addText={this.addText} currentPlayer={currentPlayer} deleteText={this.deleteText}/> 
      <Divider hidden />
      <Form onSubmit={this.search}>
        <Form.Field>
          <Modal  
            open={modalOpen}
            onClose={this.handleModalClose}
            trigger=
            {<Button className='bounceInLeft'  size='large' 
            inverted color='green' 
            type='submit' 
            onClick={this.handleModalOpen} 
            >
              Submit
            </Button>
          } closeIcon>
            <Modal.Content>
                <center><Header as='h1'>{errorMsg}</Header></center>
                <Segment raised style={visible}>
                 <p><b>Your word means:</b>{info.definition}</p>
                  <p><b>Example of Usage:</b>{info.example}</p>
                  <p>You have scored {total} points!</p>
                </Segment>
            </Modal.Content>
            <Modal.Actions>
              <Button color='green' inverted onClick={this.handleModalClose}>
              <Icon name='checkmark' /> Ok
              </Button>
            </Modal.Actions>
          </Modal>
        </Form.Field>
      </Form>
      </div>
    )
  }
}

export default Board