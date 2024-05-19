const express=require('express');
const { AdminLogin, Addmanyadmin } = require('../controllers/AdminLoginController');
const router=express.Router()
router.route('/').post(AdminLogin)
router.route('/many').post(Addmanyadmin)
module.exports=router