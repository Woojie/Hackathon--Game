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
    highScore:0,
    score: []
  },

{
    name: 'Neha',
    highScore:0,
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

  users[0].score.push(req.body.player1Score)
  users[0].highScore = Math.max.apply(null, users[0].score)
  users[1].score.push(req.body.player2Score)
  users[1].highScore = Math.max.apply(null, users[1].score)

})

app.get('/player1', (req, res) => {
  res.json(player1)
})

app.get('/player2', (req, res) => {
  res.json(player2)
})