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



let users = [
  {
    name: 'Mathew',
    score: []
  },

{
    name: 'Neha',
    score: []
  }

]



app.get('/', (req, res) => {

})

app.get('/scores', (req, res) => {
  res.json(users)
})


app.post('/', (req, res) => {
  console.log(req.body.player)
})

app.post('/scores', (req, res) => {
  console.log(req.body)
})

app.get('/player1', (req, res) => {
  res.json(player1)
})

app.get('/player2', (req, res) => {
  res.json(player2)
})