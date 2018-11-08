import React, { Component } from 'react'
import { Form, Button, Header } from 'semantic-ui-react'
import Validate from './Validate'
import axios from 'axios'

class Board extends Component {
  state = {
    wordExist: '',
    searchText: ''
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
         wordExist:  data.length > 0 ? 'Yes' : 'No'
      })
  })
}

  render(){
    return(
      <div>
      <Form>
        <Form.Field>
          <label>Write your word down!</label>
          <input type='text'  onChange={this.getSearch} />

        </Form.Field>
        <Button type='submit' onClick={() =>this.search(this.state.searchText)}>Click</Button>
      </Form>
  
      <Header as='h1'>{this.state.text}</Header>
      Does the word exist? {this.state.wordExist}
      </div>
    )
  }
}

export default Board