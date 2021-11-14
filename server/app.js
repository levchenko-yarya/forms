const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./router')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use('/', router)

mongoose.connect('mongodb://localhost:27017/form-db', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if (err) return console.log(err)
    app.listen(3000, () => {
        console.log('server started...')
    })
})
