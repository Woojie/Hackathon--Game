import React, { Component } from 'react'
import axios from 'axios'

const url = 'http://api.urbandictionary.com/v0/define?term='

class Validate extends Component {
    state = {
        wordExist: '',
        searchText: ''
    }

    getSearch = text => {
        this.setState({
            searchText: text
        })
    }
    
    search = searchText => {
        axios.get(url + searchText)
        .then (res => {
            let word = res.data.list[0].word
            this.setState({
               wordExist:  searchText === word ? 'yes' : 'no'
            })
        })
    }

    render(){
        return (
            <div>
            <h1>Test</h1>
            <input type="text" onChange={e => this.getSearch(e.target.value)}/><button onClick={() => this.search(this.state.searchText)}>Validate word</button>
            Does the word exist? {this.state.wordExist}
            </div>
        )
    }
}
export default Validate;