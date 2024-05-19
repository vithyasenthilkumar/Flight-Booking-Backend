const express = require('express')
const router = express.Router()
const { getAllflights, addNewflight, updateflight } = require('../controllers/flightController')

router.route('/').get(getAllflights).post(addNewflight).patch(updateflight)

module.exports = router