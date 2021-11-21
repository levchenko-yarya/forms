const mongoose = require('mongoose')

const Schema = mongoose.Schema
const formSchema = new Schema({
    fullname: String,
    age: Number,
    university: String,
    data: Object
})

module.exports = mongoose.model('Form', formSchema)
