const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const syncSchema = mongoose.Schema({
    key : {type: String, required: true, unique: true}
})

syncSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Sync', syncSchema)