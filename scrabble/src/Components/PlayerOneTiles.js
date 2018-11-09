import React, {Component} from 'react'
import axios from 'axios'
import { Button, Divider} from 'semantic-ui-react'

class PlayerOneTiles extends Component {


render(){
let player1 = this.props.player1.map((tiles, i ) => (    
    <Button  onClick={() =>this.props.addText(tiles.name, tiles.score, i)} content={tiles.name}/>
))

let newWord = this.props.textResult.map((tiles, i)=>(
    <Button ref={(refs)=>this.button = refs} onClick={() =>this.props.deleteText(tiles.name, tiles.score, i)} content={tiles.name}/>))
    
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

    

