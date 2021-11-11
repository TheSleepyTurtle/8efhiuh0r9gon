const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>It works</h1>')
})

app.get('/greet/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}`)
})

app.listen(8080)