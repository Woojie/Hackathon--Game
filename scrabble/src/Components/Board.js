import React, { Component } from 'react'
import { Form, Button, Modal, Divider, Icon} from 'semantic-ui-react'
import axios from 'axios'
import PlayerOneTiles from './PlayerOneTiles'

class Board extends Component {
  state = {
    wordExist: true,
    player: [],
    textResult: [],
}

  componentDidMount (){

    axios.post('http://localhost:8080')
    .then( axios.get('http://localhost:8080/player1')
      .then (res => {
          this.setState({
              player
              : res.data
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
axios.get(`http://api.urbandictionary.com/v0/define?term=` + newAlpha)
.then (res => {
    let data = res.data.list
    this.setState({
       wordExist:  data.length > 0 ? true : false,

    }, ()=>{
      if (this.state.wordExist){
        this.ifTrue()

      }else{
        this.setState({
          player: this.state.player.concat(this.state.textResult),
          textResult:[]
        })
      }
    })
})
}

ifTrue= () =>{
  console.log(this.state.textResult)
  let total = 0
  this.state.textResult.forEach((elem)=>(
    total = total+ elem.value
  ))
  axios.post('http://localhost:8080/scores', {
      score: total
    })
  }

  render(){
  
    let errorMsg = this.state.wordExist ? 'Great Word!' : 'Oops Word does not exist, Please Try Again!'
    let button = this.state.wordExist  ? 
    (<Button color='green' inverted onClick={()=>window.location.reload()}>
    <Icon name='checkmark' /> Ok
  </Button>) : ""
    return(
      <div>
      <PlayerOneTiles player={this.state.player} textResult={this.state.textResult} addText={this.addText} deleteText={this.deleteText}/>  
      <Divider hidden />
      <Form onSubmit={this.search}>
        <Form.Field>
          <Modal trigger={<Button size='large' inverted color='green' type='submit' >Submit</Button>} >
            <Modal.Content>
              <center><h1>{errorMsg}</h1></center>
            </Modal.Content>
          <Modal.Actions>
            {button}
          </Modal.Actions>
          </Modal>
        </Form.Field>
      </Form>
  

      </div>
    )
  }
}




export default Board