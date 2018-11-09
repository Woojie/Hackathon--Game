import React, {Component} from 'react'
import axios from 'axios'

class PlayerOneTiles extends Component {
    state={
        player1: []
    }
    playerOneTiles= () => {
        const url = 'http://localhost:8080/player1'
        axios.get(url)
        .then (res => {
            this.setState=({
                player1:res.data
            })
        })
      }

render(){
let player1 = this.state.player1.map((tiles) => (
        <div>
            <button>{tiles.name}</button>
        </div>
    ))
    return (
        <div>
            {player1}
        </div>
        )
    }
}

export default PlayerOneTiles

    

