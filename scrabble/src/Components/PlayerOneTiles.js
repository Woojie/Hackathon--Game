import React, {Component} from 'react'
import { Button, Divider, Popup, Header} from 'semantic-ui-react'

class PlayerOneTiles extends Component {


render(){
let player = []
if(this.props.currentPlayer === 'player1'){
    player = this.props.player1.map((tiles, i ) => (    
    <Popup inverted trigger={<Button   onClick={() =>this.props.addText(tiles.name, tiles.value, i)} content={tiles.name}/>} ><Header as='h3'>{tiles.name}</Header><p>Value: <b>{tiles.value}</b></p></Popup>

))
}else{
    player = this.props.player2.map((tiles, i ) => (    
        <Popup inverted trigger={<Button key={tiles.value + i} onClick={() =>this.props.addText(tiles.name, tiles.value, i)} content={tiles.name}/>} ><Header as='h3'>{tiles.name}</Header><p>Value: <b>{tiles.value}</b></p></Popup>
    ))}

let newWord = this.props.textResult.map((tiles, i)=>(
    <Popup inverted trigger={<Button key={tiles.value + i} onClick={() =>this.props.deleteText(tiles.name, tiles.value, i)} content={tiles.name}/>} ><Header as='h3'>{tiles.name}</Header><p>Value: <b>{tiles.value}</b></p></Popup>
))
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

    

