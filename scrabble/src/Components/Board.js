import React, { Component } from 'react'
import {Header, Form, Button, Modal, Divider, Icon, Segment} from 'semantic-ui-react'
import axios from 'axios'
import PlayerOneTiles from './PlayerOneTiles'

class Board extends Component {
  state = {
    wordExist: true,
    player: [],
    textResult: [],
    info: "",
    loading: true
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
        this.ifTrue(res.data.list[0])
      }else{
        this.setState({
          player: this.state.player.concat(this.state.textResult),
          textResult:[]
        })
      }
    })
})
}

ifTrue= (data) =>{
  this.setState({
    info: data.definition,
    loading: false
  })
console.log(data)
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
     let newText = this.state.info

    return(
      <div>
      <PlayerOneTiles player={this.state.player} textResult={this.state.textResult} addText={this.addText} deleteText={this.deleteText}/>  
      <Divider hidden />
      <Form onSubmit={this.search}>
        <Form.Field>
          <Modal trigger={<Button size='large' inverted color='green' type='submit' >Submit</Button>} >
            <Modal.Content>
              {this.state.loading ? <div>Loading...</div> : (<div>
                <center><Header as='h1'>{errorMsg}</Header></center>
                <p><b>Your word means:</b> <Segment raised>{newText}</Segment></p>
              </div>
              )}
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