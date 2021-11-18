const express = require('express')
const controller = require('./controller')
const router = express.Router()

router.get('/form', controller.get)
router.post('/form', controller.post)
router.get('/', (req, res)=> {
    res.send('заглушка')
})

module.exports = router
