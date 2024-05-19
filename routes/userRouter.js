const express = require('express')
const router = express.Router()
const {getAlluser, addNewuser, updateuser} = require('../controllers/userController')


router.route('/').get(getAlluser).post(addNewuser).patch(updateuser)

module.exports = router