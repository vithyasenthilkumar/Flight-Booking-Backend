const mongoose = require('mongoose')
const flightSchema= new mongoose.Schema(
    {
        flightnumber:{
            type:String,
            required:true,
            unique:true,
            index:true
        },
        flightdate:{
            type:Date,
            required:true
        },
        flightTime:{
            type:String,
            required:true
        },
        availableSeats:{
            type:Number,
            required:true,
            min:0
        }
    },
    {
        collection : 'flightbookings'
    }
)
module.exports = mongoose.model('flightbookings',flightSchema)