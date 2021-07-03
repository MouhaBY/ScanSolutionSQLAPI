const express = require('express')
const router = express.Router()
const configCtrl = require('../controllers/Config')
const auth = require('../middlewares/auth')


router.get('/all', configCtrl.getConfigs)
router.post('/add', configCtrl.add)
router.get('/config/:id', configCtrl.getOneConfig)
router.put('/config/:id', configCtrl.modifyConfig)
router.delete('/config/:id', configCtrl.deleteConfig)

module.exports = router