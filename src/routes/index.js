const express = require('express')
const router = express.Router()
const indexController = require('../controller/index')

router.get('/bot-hello', indexController.welcomeResponse)

module.exports = router
