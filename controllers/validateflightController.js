const flightmodel = require('../models/flightmodel')

const getflightnumber = async(request, response) => {
    const {flightnumber} = request.body
    try{
        const flightToBeEdited = await flightmodel.findOne({flightnumber:flightnumber})
        response.status(200).json(flightToBeEdited)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

module.exports = {getflightnumber}