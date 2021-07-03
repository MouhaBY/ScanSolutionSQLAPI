const Details = require('../models/Details')
var sql = require("mssql");

var config = {
    user: 'sa',
    password: '125',
    server: 'localhost\\SQL14', 
    database: 'eMdB', 
    options: {
        instanceName: 'SQL14',
        encrypt:false,
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
            }
    }
};

exports.add = async (req, res, next) => {
    let len = req.body.length
    let pool = await sql.connect(config)
    
    for (let i = 0; i < len; i++) {
        const request = pool.request()
        request.input('location', sql.VarChar, req.body[i].location)
        request.input('barcode', sql.VarChar, req.body[i].barcode)
        request.input('quantity', sql.VarChar, req.body[i].quantity)
        request.input('inventory_id', sql.VarChar, req.body[i].inventory_id)
        request.input('date', sql.VarChar, req.body[i].date)
        request.input('user_id', sql.VarChar, req.body[i].user_id)
        request.query("insert into Inv_InventoryDetails (Location, ProductBarcode, Quantity, InventoryId, Date, AccountId) VALUES (@location, @barcode, @quantity, @inventory_id, @date, @user_id)", (err, result) => { })
    }
    res.status(200).json({ok: true})
}
  
exports.getDetails = (req, res, next) => {
    Details.find().then((details) => { res.status(200).json({results : details}) })
    .catch((error) => { res.status(400).json({ error }) })
}
