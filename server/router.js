const express = require('express')
const formController = require('./formController')
const builderController = require('./builderController')
const router = express.Router()

router.get('/forms', formController.show)
router.get('/form/:id', formController.get)
router.post('/form', formController.post)
router.put('/form/:id', formController.update)
router.delete('/form/:id', formController.delete)

router.get('/builders', builderController.show)
router.get('/builder/:id', builderController.get)
router.post('/builder', builderController.post)

router.get('/', (req, res) => {
    res.send('заглушка')
})

module.exports = router
