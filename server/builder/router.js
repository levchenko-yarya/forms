const express = require('express')
const controller = require('./controller')
const router = express.Router()

router.get('/all', controller.show)
router.get('/:id', controller.get)
router.post('/', controller.post)

module.exports = router
