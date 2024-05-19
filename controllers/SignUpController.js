const userModel=require('../models/usermodel')
const addNewUser = async(req,res) => {
  const user = new userModel (
    {
      usernameame : req.body.username,
      email : req.body.email,
      password : "0000"
    }
    )
    try{
      const existingUser = await userModel.findOne({email:String(req.body.email)})
     
      if(existingUser){
        return res.status(409).json({message:'email already exists'})
      }
      const newUser = await user.save()
      res.status(200).json(newUser)
    }
    catch(error){
      res.status(500).json({message:error})
    }
}

module.exports = {addNewUser}