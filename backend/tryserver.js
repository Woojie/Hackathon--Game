const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const cors = require('cors')

app.listen(8080, () => {
    console.log('Scrabbling on port 8080')
})

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())

let bag = [{
    name: 'A',
    value: 1
  },
  {
    name: 'A',
    value: 1
  },
  {
    name: 'A',
    value: 1
  },
  {
    name: 'A',
    value: 1
  },
  {
    name: 'A',
    value: 1
  },
  {
    name: 'A',
    value: 1
  },
  {
    name: 'A',
    value: 1
  },
  {
    name: 'A',
    value: 1
  },
  {
    name: 'A',
    value: 1
  },
  {
    name: 'B',
    value: 3
  },
  {
    name: 'B',
    value: 3
  },
  {
    name: 'C',
    value: 3
  },
  {
    name: 'C',
    value: 3
  },
  {
    name: 'D',
    value: 2
  },
  {
    name: 'D',
    value: 2
  },
  {
    name: 'D',
    value: 2
  },
  {
    name: 'D',
    value: 2
  },
  {
    name: 'E',
    value: 1
  },
  {
    name: 'E',
    value: 1
  },
  {
    name: 'E',
    value: 1
  },
  {
    name: 'E',
    value: 1
  },
  {
    name: 'E',
    value: 1
  },
  {
    name: 'E',
    value: 1
  },
  {
    name: 'E',
    value: 1
  },
  {
    name: 'E',
    value: 1
  },
  {
    name: 'E',
    value: 1
  },
  {
    name: 'E',
    value: 1
  },
  {
    name: 'E',
    value: 1
  },
  {
    name: 'E',
    value: 1
  },
  {
    name: 'F',
    value: 4
  },
  {
    name: 'F',
    value: 4
  },
  {
    name: 'G',
    value: 2
  },
  {
    name: 'G',
    value: 2
  },
  {
    name: 'G',
    value: 2
  },
  {
    name: 'H',
    value: 4
  },
  {
    name: 'H',
    value: 4
  },
  {
    name: 'I',
    value: 1
  },
  {
    name: 'I',
    value: 1
  },
  {
    name: 'I',
    value: 1
  },
  {
    name: 'I',
    value: 1
  },
  {
    name: 'I',
    value: 1
  },
  {
    name: 'I',
    value: 1
  },
  {
    name: 'I',
    value: 1
  },
  {
    name: 'I',
    value: 1
  },
  {
    name: 'I',
    value: 1
  },
  {
    name: 'J',
    value: 8
  },
  {
    name: 'K',
    value: 5
  },
  {
    name: 'L',
    value: 1
  },
  {
    name: 'L',
    value: 1
  },
  {
    name: 'L',
    value: 1
  },
  {
    name: 'L',
    value: 1
  },
  {
    name: 'M',
    value: 3
  },
  {
    name: 'M',
    value: 3
  },
  {
    name: 'N',
    value: 1
  },
  {
    name: 'N',
    value: 1
  },
  {
    name: 'N',
    value: 1
  },
  {
    name: 'N',
    value: 1
  },
  {
    name: 'N',
    value: 1
  },
  {
    name: 'N',
    value: 1
  },
  {
    name: 'O',
    value: 1
  },
  {
    name: 'O',
    value: 1
  },
  {
    name: 'O',
    value: 1
  },
  {
    name: 'O',
    value: 1
  },
  {
    name: 'O',
    value: 1
  },
  {
    name: 'O',
    value: 1
  },
  {
    name: 'O',
    value: 1
  },
  {
    name: 'O',
    value: 1
  },
  {
    name: 'P',
    value: 3
  },
  {
    name: 'P',
    value: 3
  },
  {
    name: 'Q',
    value: 10
  },
  {
    name: 'R',
    value: 1
  },
  {
    name: 'R',
    value: 1
  },
  {
    name: 'R',
    value: 1
  },
  {
    name: 'R',
    value: 1
  },
  {
    name: 'R',
    value: 1
  },
  {
    name: 'R',
    value: 1
  },
  {
    name: 'S',
    value: 1
  },
  {
    name: 'S',
    value: 1
  },
  {
    name: 'S',
    value: 1
  },
  {
    name: 'S',
    value: 1
  },
  {
    name: 'T',
    value: 1
  },
  {
    name: 'T',
    value: 1
  },
  {
    name: 'T',
    value: 1
  },
  {
    name: 'T',
    value: 1
  },
  {
    name: 'T',
    value: 1
  },
  {
    name: 'T',
    value: 1
  },
  {
    name: 'U',
    value: 1
  },
  {
    name: 'U',
    value: 1
  },
  {
    name: 'U',
    value: 1
  },
  {
    name: 'U',
    value: 1
  },
  {
    name: 'V',
    value: 4
  },
  {
    name: 'V',
    value: 4
  },
  {
    name: 'V',
    value: 4
  },
  {
    name: 'V',
    value: 4
  },
  {
    name: 'W',
    value: 4
  },
  {
    name: 'W',
    value: 4
  },
  {
    name: 'X',
    value: 8
  },
  {
    name: 'Y',
    value: 4
  },
  {
    name: 'Y',
    value: 4
  },
  {
    name: 'Z',
    value: 10
  },
  ]
  
  

  


let player1 = {
name: 'Wooj', 
score:0,
bag:[]

}
let player2 = {
  name: 'Neha', 
  score:0,
  bag:[]
  
  }

 
let score= {
    player1: {name:'Wooj', score:0},
    player2: {name:'Neha', score:0}
}


let usedStuff =[]



app.get('/', (req, res) => {
    res.json(bag)
})

app.get('/scores', (req, res) => {
    res.json(score )
})


 app.post('/',(req, res) => {
   if (req.body.player === 'player2'){
    player2.bag = []
    for (let i = 0 ;i< 7; i++)
    player2.bag = player2.bag.concat(bag.splice(Math.floor(Math.random()*bag.length),1))
    
  }else{
    player1.bag = []
    for (let i = 0 ;i< 7; i++)
    player1.bag = player1.bag.concat(bag.splice(Math.floor(Math.random()*bag.length),1))
  }
console.log(bag.length)
})

app.post('/scores', (req, res) =>{
  if(req.body.player === 'player1'){
    player2.score += req.body.score  
    console.log('player2: '+player2.score)
  }else{
    player1.score += req.body.score
    console.log('player1: '+player1.score)
  }

})

app.get('/player1', (req, res) => {
    res.json(player1)
})

app.get('/player2', (req, res) => {
    res.json(player2)
})

