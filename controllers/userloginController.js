const usermodel=require('../models/usermodel')
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const JWT_TOKEN="vyogvhcryifuhjbhvytrfdituyhbceugfuhwbfkjwkwdowrh";
    
const loginUser=async(request,response) => {
const {email,password}=request.body
console.log(email,password)
const validUser=await usermodel.find({email:email})
console.log(validUser)
if(!validUser){
    
    return response.status(404).json({message: "Invalid email"})
}
const isValidPassword = password === validUser[0].password;
if(!isValidPassword){
	return response.status(400).json({message:'Incorrect Password'})
}

    const AUTH_TOKEN=jwt.sign({email: validUser[0].email,_id:validUser[0]._id},JWT_TOKEN,{expiresIn:"1h"})
     response.status(200).json({status: 'OK', token:AUTH_TOKEN, data:validUser[0]})
    
}
module.exports={loginUser}