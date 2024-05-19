const usermodel = require('../models/usermodel')
const userdata = require('../data/userdata')


const getAlluser = async(request, response) => {
    try{
    const user = await usermodel.find()
    if (user.length === 0)
    {
       const user = await usermodel.insertMany(initialData)
    }
    response.status(200).json(user)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

const addNewuser = async(request, response) => {
    const newuser = request.body
    try{
        const existinguser = await usermodel.findOne({userID:request.body.userID})
        if (existinguser)
        {
            return response.status(409).json({message:'User already exsists.'})
        }
        const user = await usermodel.create(addNewuser)
        response.status(201).json(user)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

const updateuser = async(request, response) => {
    const userToBeUpdated = request.body
    try{
        
        const user = await usermodel.findOneAndUpdate({userID:userToBeUpdated.userID}, userToBeUpdated)
        response.status(201).json(user)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

module.exports = {getAlluser, addNewuser, updateuser}