const mongoose = require('mongoose')

const Schema = mongoose.Schema
const formSchema = new Schema({
    name: String,
    components: String
})

module.exports = mongoose.model('Form', formSchema)
