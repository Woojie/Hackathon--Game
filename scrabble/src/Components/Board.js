import React, { Component } from 'react'
import { Form, Button, Modal} from 'semantic-ui-react'
import axios from 'axios'
import PlayerOneTiles from './PlayerOneTiles'

class Board extends Component {
  state = {
    wordExist: true,
    searchText: '',

  }

  componentDidMount (){

    axios.post('http://localhost:8080',{
      startGame: true
    }).then(
    
      axios.get('http://localhost:8080/player1')
    .then((res)=>{

    }))

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
      <Form>
        <Form.Field>
          <label>Write your word down!</label><input type='text' onChange={this.getSearch} />
          <Modal trigger={<Button type='submit' onClick={() =>this.search(this.state.searchText)}>Click</Button>} >
            <Modal.Content>
              <center><h1>{errorMsg}</h1></center>
            </Modal.Content>

          </Modal>

        </Form.Field>
        
      </Form>
  
        <PlayerOneTiles />  
      </div>
    )
  }
}

export default Board