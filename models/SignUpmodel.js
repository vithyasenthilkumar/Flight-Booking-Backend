const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    username:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true,
      unique:true
    },
    password:{
      type:String,
      required:true
    }
  },
  {
    collection:'users'
  }
)

module.exports = mongoose.model('users',userSchema)