const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const productSchema = mongoose.Schema({
    code : {type: String, required: true, unique: true},
    name : {type: String, required : true},
})

productSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Product', productSchema)