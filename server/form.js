const mongoose = require('mongoose')

const Schema = mongoose.Schema
const formSchema = new Schema({
    fullname: String,
    age: Number,
    university: String
})

module.exports = mongoose.model('Form', formSchema)
