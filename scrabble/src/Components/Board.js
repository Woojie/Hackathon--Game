import React, { Component } from 'react'
import { Form, Button, Header } from 'semantic-ui-react'


class Board extends Component {
  state = {
    text: ''
  }
  textInput = e => {
    this.setState({
      text:e.target.value
    })
  }

  render(){
    
    return(
      <div>
      <Form>
        <Form.Field>
          <label>Write your word down!</label>
          <input type='text'  onChange={this.textInput} />
          <Button type='submit'>Submit</Button>

        </Form.Field>
      </Form>
  
      <Header as='h1'>{this.state.text}</Header>
      </div>
    )
  }
}

export default Board