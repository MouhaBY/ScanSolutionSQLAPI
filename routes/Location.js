const express = require('express')
const router = express.Router()
const locationCtrl = require('../controllers/Location')
const auth = require('../middlewares/auth')


router.get('/all', locationCtrl.getLocations)
router.post('/add', locationCtrl.add)

module.exports = router