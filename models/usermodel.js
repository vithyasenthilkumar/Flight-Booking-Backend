const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true
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