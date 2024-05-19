const express = require('express')
const router = express.Router()
const {getAllflights, addNewflight, updateflight, Addmanyflights, RemoveFlight, getflight } = require('../controllers/flightController')

router.route('/').get(getAllflights).post(addNewflight).patch(updateflight)
router.route('/many').post(Addmanyflights)
router.route('/:flightnumber').get(getflight).delete(RemoveFlight)
module.exports = router