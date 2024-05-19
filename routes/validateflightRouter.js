const express = require('express')
const router = express.Router()
const {getflightnumber} = require('../controllers/validateflightController')

router.route('/').post(getflightnumber)

module.exports = router