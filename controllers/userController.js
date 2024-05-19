const usermodel = require('../models/usermodel')
const userdata = require('../data/userdata')


const getAlluser = async(request, response) => {
    try{
    const user = await usermodel.find()
    if (user.length === 0)
    {
       const user = await usermodel.insertMany(userdata)
       return response.status(200).json(user)
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
        const user = await usermodel.create(newuser)
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
async function getuser(request, response, next) {
    let user;
    try {
        user = await usermodel.findOne({ userID: request.params.userID });
        if (user == null) {
            return response.status(404).json({ message: `Cannot find user with ID ${request.params.userID}` });
        }
    } catch (error) {
        return response.status(500).json({ message: error.message });
    }
    response.user = user;
    next();
}
const RemoveUser = async (request, response) => {
    try {
        await usermodel.deleteOne({userID:request.params.userID});
        response.json({ message: `Removed the user` });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

module.exports = {getAlluser, addNewuser, updateuser,RemoveUser,getuser}