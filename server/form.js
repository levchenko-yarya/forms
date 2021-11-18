const mongoose = require('mongoose')

const Schema = mongoose.Schema
const formSchema = new Schema({
    name: String,
    components: Object
})

module.exports = mongoose.model('Form', formSchema)
