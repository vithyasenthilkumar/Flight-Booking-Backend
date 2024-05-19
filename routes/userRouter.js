const express = require('express')
const router = express.Router()
const {getAlluser, addNewuser, updateuser, getuser, RemoveUser} = require('../controllers/userController')


router.route('/').get(getAlluser).post(addNewuser).patch(updateuser)
router.route('/:userID').get(getuser).delete(RemoveUser)

module.exports = router