var sql = require("mssql");

const Product = require('../models/Product')

exports.add = (req, res, next) => {
    const product = new Product({
        code: req.body.code,
        name: req.body.name,
    })
    product.save()
    .then(()=> res.status(200).json({message: 'Product created'}))
    .catch(error => res.status(400).json({ error }))
}

exports.getProducts = async (req, res, next) => {
    try {
        const result = await sql.query`select Code, Name from Inv_Products`
        res.status(200).json({results : result.recordset})
    }
    catch (err) {
        res.status(400).json({ err })
    }
}
