const express = require('express')
const app = express()


app.listen(8080, () => {
    console.log('Scrabbling on port 8080')

})


app.use(express.static('public'))

let players = [{
        name: '',
        score: 0

    },
    {
        name: '',
        score: 0
    }
]

let bags = [{
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




app.get('/', (req, res) => {
    res.json(bags)
})


app.get('/player1', (req, res) => {
    res.json(bags)
})

app.get('/player2', (req, res) => {
    res.json(bags)
})