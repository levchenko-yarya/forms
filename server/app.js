const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const Form = require('./form')

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', (req, res)=> {
    let newForm = new Form({
        name: req.body.name,
        components: req.body.components
    })
    Form.save(newForm, (err, form)=> {
        if (err)
            res.json({success: false, msg: 'Форма не добавлена :('})
        else
            res.json({success: true, msg: 'Форма добавлена!'})
    })
})

mongoose.connect('mongodb://localhost:27017/form-db', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if(err) return console.log(err)
    app.listen(3000, ()=> {console.log('server started...')})
})
