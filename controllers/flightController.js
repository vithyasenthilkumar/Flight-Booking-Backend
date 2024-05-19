const flightmodel = require('../models/flightmodel')
const Initialdata = require('../data/userdata')


const getAllflights = async(request, response) => {
    try{
    const flight = await flightmodel.find()
    if (flight.length === 0)
    {
       const flight = await flightmodel.insertMany(initialData)
    }
    response.status(200).json(flight)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

const addNewflight = async(request, response) => {
    const newflight = request.body
    try{
        const existingflight = await flightmodel.findOne({flightnumber:request.body.flightnumber})
        if (existingPatient)
        {
            return response.status(409).json({message:'Flight number already exsists.'})
        }
        const flight = await flightmodel.create(newflight)
        response.status(201).json(flight)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

const updateflight = async(request, response) => {
    const flightToBeUpdated = request.body
    try{
        
        const flight = await flightmodel.findOneAndUpdate({flightnumber:flightToBeUpdated.flightnumber}, flightToBeUpdated)
        response.status(201).json(flight)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

module.exports = {getAllflights, addNewflight, updateflight}