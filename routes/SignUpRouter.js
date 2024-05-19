const express = require('express')
const router = express.Router()
const {addNewUser} = require('../controllers/SignUpController')

router.route('/').post(addNewUser)



module.exports = router;