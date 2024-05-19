const flightmodel = require('../models/flightmodel')
const flightInitialData = require('../data/initialdata')

const Addmanyflights = async(request,response) =>{
    try{
  
        const flight = await flightmodel.insertMany(request.body)
        console.log(request.body)
  
     response.status(200).json(flight)
     }
     catch(error)
     {
         response.status(500).json({message:error.message})
     }
}
const getAllflights = async(request, response) => {
    try{
    const flight = await flightmodel.find()
    console.log(flightInitialData)
    if (flight.length === 0)
    {
       const addflightData = await flightmodel.insertMany(flightInitialData[0])
       return response.status(200).json(addflightData)
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
        if (existingflight)
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
async function getflight(request, response, next) {
    let flight;
    try {
        flight = await flightmodel.findOne({ flightnumber: request.params.flightnumber });
        if (flight == null) {
            return response.status(404).json({ message: `Cannot find flight with number ${request.params.flightnumber}` });
        }
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
    response.flight = flight;
    next();
}
const RemoveFlight = async (request, response) => {
    try {
        await flightmodel.deleteOne({flightnumber:request.params.flightnumber});
        response.json({ message: `Removed the flight` });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};



module.exports = {Addmanyflights,getAllflights, addNewflight, updateflight,RemoveFlight,getflight}