const express = require('express')
const router = express.Router()
const InvCtrl = require('../controllers/Inventory')
const auth = require('../middlewares/auth')


router.get('/all', InvCtrl.getInvs)
router.post('/add', InvCtrl.add)

module.exports = router