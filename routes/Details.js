const express = require('express')
const router = express.Router()
const DetailsCtrl = require('../controllers/Details')
const auth = require('../middlewares/auth')


router.get('/all', DetailsCtrl.getDetails)
router.post('/add', DetailsCtrl.add)

module.exports = router