const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },
        userpasword:{
            type:String,
            required:true,
            default:"0000"

        },
        userID:
        {
            type:String,
            required:true,
            unique:true,
            index:true
        },
        userflightnumber:{
            type:String,
            required:true
        },
        userflightdate:{
            type:Date,
            required:true
        },
        userflightTime:{
            type:String,
            required:true
        }
    },
    {
        collection : 'user'
    }
)
module.exports = mongoose.model('user',UserSchema)