const express = require('express')
const router = express.Router()
const syncCtrl = require('../controllers/Sync')
const auth = require('../middlewares/auth')


router.get('/all', syncCtrl.getSyncs)
router.post('/add', syncCtrl.add)
router.get('/sync/:id', syncCtrl.getOneSync)
router.delete('/sync', syncCtrl.deleteSync)

module.exports = router