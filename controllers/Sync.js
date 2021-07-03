const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
var sql = require("mssql");

const Sync = require('../models/Sync')

const API_TOKEN = "f78171b682bc4c08986c8067a8113ce6"

exports.add = (req, res, next) => {
        const sync = new Sync({
            key: req.body.key,
        })
        sync.save()
        .then(()=> res.status(200).json({message: 'Synchronisation created'}))
        .catch(error => res.status(400).json({ error }))
}

exports.getOneSync = (req, res, next) => {
    Sync.findOne({ key: req.params.key })
    .then((sync) => { res.status(200).json(sync) })
    .catch((error) => { res.status(404).json({ error }) })
}

exports.deleteSync = (req, res, next) => {
    Sync.deleteOne({key: req.params.key})
    .then(() => { res.status(200).json({ message: 'Sync Deleted!' }) })
    .catch((error) => { res.status(400).json({ error }) })
}
  
exports.getSyncs = async (req, res, next) => {
    let api_key = req.query.api_key
    if (api_key == API_TOKEN){
        try {
            const result = await sql.query`select * from Inv_Sync`
            res.status(200).json({results : result.recordset})
        }
        catch (err) {
            res.status(400).json({ err })
        }
    }
    else {
        return res.status(401).json({error : 'token incorrect'})
    }
}
