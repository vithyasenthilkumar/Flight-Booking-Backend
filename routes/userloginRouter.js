const express=require('express');
const { loginUser } = require('../controllers/userloginController');
const router=express.Router()
router.route('/').post(loginUser)
module.exports=router