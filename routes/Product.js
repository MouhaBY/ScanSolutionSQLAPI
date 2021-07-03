const express = require('express')
const router = express.Router()
const productCtrl = require('../controllers/Product')
const auth = require('../middlewares/auth')


router.get('/all', productCtrl.getProducts)
router.post('/add', productCtrl.add)

module.exports = router