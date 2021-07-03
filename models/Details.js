const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const detailSchema = mongoose.Schema({
    id : {type: Number, required: true, unique: true},
    inventory_id : {type: Number, required : true},
    location : {type: String, required : true},
    barcode : {type: String, required: true},
    quantity : {type: Number, required: true},
    user_id : {type: String, required: true},
    date : {type: String, required: true},
})

detailSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Details', detailSchema)