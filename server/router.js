const express = require('express')
const controller = require('./controller')
const router = express.Router()

router.get('/forms', controller.get)
router.post('/form', controller.post)

module.exports = router
