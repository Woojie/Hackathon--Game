import React, {Component} from 'react'
import axios from 'axios'
import { Button, Divider} from 'semantic-ui-react'

class PlayerOneTiles extends Component {
    state={
        player1: [],
        textResult: []
    }

      componentDidMount(){
        const url = 'http://localhost:8080/player1'
        axios.get(url)
        .then (res => {
            this.setState({
                player1: res.data
            })
        })
    }

addText = (name, score, index) =>{
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

deleteText = () =>{
        
}

render(){
let player1 = this.state.player1.map((tiles, i ) => (    
    <Button  onClick={() =>this.addText(tiles.name, tiles.score, i)} content={tiles.name}/>
))

let newWord = this.state.textResult.map((tiles)=>(
    <Button ref={(refs)=>this.button = refs} onClick={this.deleteText} content={tiles.name}/>))

    return (
        <div>
            {player1}
            <Divider />
            {newWord}
        </div>
        )
    }
}

export default PlayerOneTiles

    

