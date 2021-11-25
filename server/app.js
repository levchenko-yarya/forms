const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const formRouter = require('./form/router')
const builderRouter = require('./builder/router')
const app = express()
const jsonParser = express.json()

app.use(bodyParser.urlencoded({extended: false}))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS")
    next()
})

app.use('/form', jsonParser, formRouter)
app.use('/builder', jsonParser, builderRouter)
app.get('/', (req, res) => {
    res.send('заглушка')
})

mongoose.connect('mongodb://localhost:27017/form-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error) => {
    if (error) return console.log(error)
})
mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB")
})

module.exports = app
