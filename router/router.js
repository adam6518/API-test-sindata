const express = require('express')
var router = express.Router()
const { controller } = require('../controller/index')

router.post('/add', controller.addSupplier)
router.delete('/delete', controller.deleteSupplier)
router.get('/search', controller.searchSupplier)
router.get('/getdata', controller.getData)

module.exports = router