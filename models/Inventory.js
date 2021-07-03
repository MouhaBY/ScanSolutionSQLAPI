const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const invSchema = mongoose.Schema({
    id : {type: Number, required: true, unique: true},
    name : {type: String, required : true},
    date : {type: String, required: true},
    state : {type: Number, required: true},
})

invSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Inventory', invSchema)