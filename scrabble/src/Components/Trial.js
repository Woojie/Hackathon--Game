import React, { Component } from 'react'
import {Header, Form, Button, Modal, Divider, Icon, Segment} from 'semantic-ui-react'
import axios from 'axios'
import PlayerOneTiles from './PlayerOneTiles'
import Score from'./Score'

class Board extends Component {
  state = {
    wordExist: true,
    player: [],
    textResult: [],
    info: "",
    currentPlayer: 'player1',
    modalOpen: false ,
    bag: this.props.bag,
    player1: [],
    player2: [],

}

  componentDidMount (){

      
    axios.post('http://localhost:8080', {
      player: this.state.currentPlayer
    })
    .then( axios.get(`http://localhost:8080/${this.state.currentPlayer}`)
      .then (res => {
          this.setState({
              player: res.data.bag,
              loading: false,
          })
      })
    )
  }



deleteText = (name, score, index) =>{
  let obj = {
      name: name,
      value: score
  }
  let newHand = this.state.textResult
  newHand.splice(index, 1)

this.setState({
  textResult: newHand,
  player: this.state.player.concat(obj)
})
}

addText = (name, score, index ) =>{
  let obj = {
      name: name,
      value: score
  }
  let newHand = this.state.player
  newHand.splice(index, 1)

this.setState({
  player: newHand,
  textResult: this.state.textResult.concat(obj)
})
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
        this.setState({
          player: this.state.player.concat(this.state.textResult),
          textResult:[],

        })
      }
    })
})
}

ifTrue= (data) =>{
  let newPlayer = this.state.currentPlayer === 'player1' ? 'player2' : 'player1'
  this.setState({
    info: data,
    currentPlayer: newPlayer
  }, () =>{
    let total = 0
    this.state.textResult.forEach((elem)=>(
      total = total+ elem.value
    ))

    axios.post('http://localhost:8080/scores', {
        score: total,
        player: this.state.currentPlayer
      }).then(this.clearData(total))
    
    }
  )
  }



clearData = (total) => {

  axios.post('http://localhost:8080', {
    player: this.state.currentPlayer
  })
  .then(axios.get(`http://localhost:8080/${this.state.currentPlayer}`)
  .then((res)=>{
    this.setState({
      player:res.data.bag,
      textResult: [], 

    })
  })
   )
}


  handleModalOpen = () => this.setState({ modalOpen: true })

  handleModalClose = () => {

    this.setState({ modalOpen: false }, ()=>{

    }) }



  render(){
    let errorMsg = this.state.wordExist ? 'Great Word!' : 'Oops Word does not exist, Please Try Again!'


     

    return(
      <div>
      <Score currentPlayer={this.state.currentPlayer} />
      
      <PlayerOneTiles player={this.state.player} textResult={this.state.textResult} addText={this.addText} deleteText={this.deleteText}/> 
 

      <Divider hidden />
      <Form onSubmit={this.search}>
        <Form.Field>
          <Modal  
            open={this.state.modalOpen}
            onClose={this.handleModalClose}
            trigger=
            {<Button size='large' 
            inverted color='green' 
            type='submit' 
            onClick={this.handleModalOpen} 
            >
              Submit
            </Button>
          } closeIcon>
            <Modal.Content>
  
                <center><Header as='h1'>{errorMsg}</Header></center>
                <Segment raised>
                 <p><b>Your word means:</b>{this.state.info.definition}</p>
                  <p><b>Example of Usage:</b>{this.state.info.example}</p>
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