import React, {Component} from 'react'
import axios from 'axios'
import { Button, Divider} from 'semantic-ui-react'

class PlayerOneTiles extends Component {


render(){
let player = this.props.player.map((tiles, i ) => (    
    <Button  onClick={() =>this.props.addText(tiles.name, tiles.value, i)} content={tiles.name}/>
))

let newWord = this.props.textResult.map((tiles, i)=>(
    <Button ref={(refs)=>this.button = refs} onClick={() =>this.props.deleteText(tiles.name, tiles.value, i)} content={tiles.name}/>))
    
    return (
        <div>
            {player}
            <Divider />
            {newWord}
            
        </div>
        )
    }
}

export default PlayerOneTiles

    

