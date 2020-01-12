const express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser')

const port = 5000

const { router } = require('./router/index')

app.use(bodyParser.json())
app.use(cors())
app.use('/supplier', router)

app.get('/', (req, res) => {
    res.send('success')
})

app.listen(port, console.log(`Port ${port} is running now`))