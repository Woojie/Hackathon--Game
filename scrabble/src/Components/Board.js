import React, { Component } from 'react'
import { Form, Button, Header, Modal } from 'semantic-ui-react'
import axios from 'axios'

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
      console.log(res)
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
          <label>Write your word down!</label><input type='text' error onChange={this.getSearch} />
          <Modal trigger={<Button type='submit' onClick={() =>this.search(this.state.searchText)}>Click</Button>} basic>
            <Modal.Content>
              {errorMsg}
            </Modal.Content>
          </Modal>

        </Form.Field>
        
      </Form>
  
      <Header as='h1'>{this.state.text}</Header>
      Does the word exist? {this.state.wordExist}
      </div>
    )
  }
}

export default Board