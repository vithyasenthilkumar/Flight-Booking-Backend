const adminmodel=require('../models/AdminLoginmodel')
const jwt=require('jsonwebtoken');
const JWT_TOKEN="vyogvhcryifuhjbhvytrfdituyhbceugfuhwbfkjwkwdowrh";
const Addmanyadmin = async(request,response) =>{
    try{
  
        const admin = await adminmodel.insertMany(request.body)
        console.log(request.body)
  
     response.status(200).json(admin)
     }
     catch(error)
     {
         response.status(500).json({message:error.message})
     }
}
    
const AdminLogin=async(request,response) => {
const {email,password}=request.body
console.log(email,password)
const validadmin=await adminmodel.find({email:email})
console.log(validadmin)
if(!validadmin){
    
    return response.status(404).json({message: "Invalid email"})
}
const isValidPassword = password === validadmin[0].password;
if(!isValidPassword){
	return response.status(400).json({message:'Incorrect Password'})
}

    const AUTH_TOKEN=jwt.sign({email: validadmin[0].email,_id:validadmin[0]._id},JWT_TOKEN,{expiresIn:"1h"})
     response.status(200).json({status: 'OK', token:AUTH_TOKEN, data:validadmin[0]})
    
}
module.exports={AdminLogin,Addmanyadmin}