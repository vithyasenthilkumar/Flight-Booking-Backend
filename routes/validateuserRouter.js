const express = require('express')
const router = express.Router()
const {getuserID} = require('../controllers/validateuserController')

router.route('/').post(getuserID)

module.exports = router