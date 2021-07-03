var sql = require("mssql");

const Location = require('../models/Location')

exports.add = (req, res, next) => {
    const location = new Location({
        code: req.body.code,
        name: req.body.name,
    })
    location.save()
    .then(()=> res.status(200).json({message: 'location created'}))
    .catch(error => res.status(400).json({ error }))
}

exports.getLocations = async (req, res, next) => {
    try {
        const result = await sql.query`select Code, Name from Inv_Areas`
        res.status(200).json({results : result.recordset})
    }
    catch (err) {
        res.status(400).json({ err })
    }
}