import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'

class Home extends Component{
state={
    user1:"",
    user2:""
}
getPlayerName1= (e)=>{
    this.setState({
        user1:e.target.value
    })
}
getPlayerName2 =(e)=>{
this.setState({
    user2: e.target.value
})
}
    render(){
        const goToGame = () => this.props.history.push('/board')

        return(
            
            <div className="container">
                <h1 className="mainHeading">Welcome to Urban Scrabble Game!!</h1>
                <h3 className="mainHeading1">Let's Start the game!!</h3>
               
                {/* <h4 className="nameHeading">Enter Players Names</h4>
                <Input icon='users' iconPosition='left' placeholder='Player One' onChange={this.getPlayerName1}/>
                <Input icon='users' iconPosition='left' placeholder='Player Two' onChange={this.getPlayerName2}/>
                <br/>
                <br/> */}
                <Button size='large' inverted color='blue' type="button" onClick={goToGame} >Start Game</Button>
              </div>
              
        )
    }
}
export default Home