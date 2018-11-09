import React from 'react'
import {Header, Divider, Popup} from 'semantic-ui-react'
import axios from 'axios'


const HighScores = (props) =>{
  axios.get('http://localhost:8080/scores')
  .then((res)=>{
    console.log(res.data)
  })
  return(
    <Popup.Content>
      Hello
    </Popup.Content>
  )
}

export default HighScores