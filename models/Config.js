const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const configSchema = mongoose.Schema({
    key : {type: String, required: true, unique: true},
    state : {type: Number, required : true},
})

configSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Config', configSchema)