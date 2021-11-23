const mongoose = require('mongoose')

const Schema = mongoose.Schema
const builderSchema = new Schema({
    name: String,
    components: Object
})

module.exports = mongoose.model('Builder', builderSchema)
