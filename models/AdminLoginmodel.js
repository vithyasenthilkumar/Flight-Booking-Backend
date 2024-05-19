const mongoose = require('mongoose')
const admindata = require('../data/Admindata')
const adminSchema = new mongoose.Schema(
  {
    adminName:{
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
    collection:'admin'
  }
)

module.exports = mongoose.model('admin',adminSchema)