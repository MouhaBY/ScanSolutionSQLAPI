const Inventory = require('../models/Inventory')
var sql = require("mssql");

exports.add = (req, res, next) => {
    let len = req.body.length
    for (let i = 0; i < len; i++) {
        const inventory = new Inventory({
            id: req.body[i].id,
            name: req.body[i].name,
            date: req.body[i].date,
            state: req.body[i].state,
        })            
        inventory.save().catch((error) => { })
    }
    res.status(200).json({ok: true})
}
  
exports.getInvs = async (req, res, next) => {
    try {
        const result = await sql.query`select * from Inv_Inventories WHERE InventoryStateId = 1`
        res.status(200).json({results : result.recordset})
    }
    catch (err) {
        res.status(400).json({ err })
    }
}
