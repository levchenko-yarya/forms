const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./router')
const Form = require('./form')
const app = express()
const jsonParser = express.json()

app.use(bodyParser.urlencoded({extended: false}))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS")
    next()
})

app.post('/post-form', jsonParser, function (req, res) {
    if(!req.body) return res.sendStatus(400)

    let form = new Form({
        name: req.body.name,
        components: req.body.components
    })
    form.save()
    console.log('save is done')
    res.json('save is done')
})


// app.use('/', router)

mongoose.connect('mongodb://localhost:27017/form-db', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if (err) return console.log(err)
    app.listen(3000, () => {
        console.log('server started...')
    })
})
