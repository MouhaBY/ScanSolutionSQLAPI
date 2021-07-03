const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const locationSchema = mongoose.Schema({
    code : {type: String, required: true, unique: true},
    name : {type: String, required : true},
})

locationSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Location', locationSchema)