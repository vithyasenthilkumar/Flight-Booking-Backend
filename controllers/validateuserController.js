const usermodel = require('../models/usermodel')

const getuserID = async(request, response) => {
    const {userID} = request.body
    try{
        const userToBeEdited = await usermodel.findOne({userID:userID})
        response.status(200).json(userToBeEdited)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

module.exports = {getuserID}