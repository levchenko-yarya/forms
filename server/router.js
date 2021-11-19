const express = require('express')
const controller = require('./controller')
const router = express.Router()

router.get('/forms', controller.show)
router.get('/form/:id', controller.get)
router.post('/form', controller.post)
router.put('/form/:id', controller.update)
router.delete('/form/:id', controller.delete)
router.get('/', (req, res) => {
    res.send('заглушка')
})

module.exports = router
