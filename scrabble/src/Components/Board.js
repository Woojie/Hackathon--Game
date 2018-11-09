import React, { Component } from 'react'
import { Form, Button, Modal, Divider} from 'semantic-ui-react'
import axios from 'axios'
import PlayerOneTiles from './PlayerOneTiles'

class Board extends Component {
  state = {
    wordExist: true,
    searchText: '',
    player1: [],
    textResult: []
}

  

  componentDidMount (){

    axios.post('http://localhost:8080',{
      startGame: true
    }).then(
  
      axios.get('http://localhost:8080/player1')
      .then (res => {
          this.setState({
              player1: res.data
          })
      })
    )
  }

  
deleteText = (name, score, index) =>{
  let obj = {
      name: name,
      score: score
  }
  let newHand = this.state.textResult
  newHand.splice(index, 1)

this.setState({
  textResult: newHand,
  player1: this.state.player1.concat(obj)
})

}

addText = (name, score, index ) =>{
  let obj = {
      name: name,
      score: score
  }
  let newHand = this.state.player1
  newHand.splice(index, 1)

this.setState({
  player1: newHand,
  textResult: this.state.textResult.concat(obj)
})
}

getSearch = e => {
    this.setState({
        searchText: e.target.value
    })
}

search = (searchText) => {



  const url = 'http://api.urbandictionary.com/v0/define?term='
  axios.get(url + searchText)
  .then (res => {
      let data = res.data.list
      this.setState({
         wordExist:  data.length > 0 ? true : false
      })
  })
}

  render(){
    
    let errorMsg = this.state.wordExist ? 'Great Word!' : 'Oops Word does not exist, Please Try Again!'
    return(
      <div>
      <PlayerOneTiles player1={this.state.player1} textResult={this.state.textResult} addText={this.addText} deleteText={this.deleteText}/>  
      <Divider hidden />
      <Form>
        <Form.Field>
          <Modal trigger={<Button size='large' inverted color='green' type='submit' onClick={() =>this.search(this.state.searchText)}>Submit</Button>} >
            <Modal.Content>
              <center><h1>{errorMsg}</h1></center>
            </Modal.Content>
          </Modal>
        </Form.Field>
      </Form>
  

      </div>
    )
  }
}


let newAlpha= ""
data.forEach((elem)=>(
  newAlpha = newAlpha + elem.name
))
let total = 0
data.forEach((elem)=>(
  total = total+ elem.value
))
console.log(newAlpha)
console.log(total)

export default Board