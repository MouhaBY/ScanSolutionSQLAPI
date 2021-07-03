const express = require ('express')
const bodyParser = require ('body-parser')
const sql = require("mssql");

const userRoutes = require('./routes/User')
const configRoutes = require('./routes/Config')
const syncRoutes = require('./routes/Sync')
const productRoutes = require('./routes/Product')
const locationRoutes = require('./routes/Location')
const inventoryRoutes = require('./routes/Inventory')
const detailsRoutes = require('./routes/Details')


const config = {
    user: 'sa',
    password: '125',
    server: 'localhost\\SQL14', 
    database: 'eMdB', 
    options: {
        instanceName: 'SQL14',
        encrypt: false,
        cryptoCredentialsDetails: { minVersion: 'TLSv1' }
    }
}

sql.connect(config).then(() => console.log('Connexion à SQL réussie !')).catch(() => console.log('Connexion à SQL échouée !'))

const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
})

app.use(bodyParser.json())
app.use('/api/auth', userRoutes)
app.use('/api/configurations', configRoutes)
app.use('/api/synchronisations', syncRoutes)
app.use('/api/products', productRoutes)
app.use('/api/locations', locationRoutes)
app.use('/api/inventories', inventoryRoutes)
app.use('/api/details', detailsRoutes)

module.exports = app
