import React, { Component } from 'react'
import {Header, Divider, Popup, Loader, Dimmer} from 'semantic-ui-react'
import axios from 'axios'


class HighScores extends Component{
  state={
    data:[],
    loading:true
  }

  render(){

  axios.get('http://localhost:8080/scores')
  .then((res)=>{
    this.setState({
      data:res.data,
      loading: false
    })
  })
  let {data, loading} = this.state
  let newData = data.map((elem)=>(
    <div>
    <Header as='h2'>Name: {elem.name}</Header>
    <Header as='h4'>Highest Score:{elem.highScore}</Header>
    <Divider />
    </div>
    ))
  return(
    
  
    <Popup.Content>
      {newData}
    </Popup.Content>
  )
}
}

export default HighScores