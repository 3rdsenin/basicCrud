const models = require('../models')



const getUsers = async(req, res, next) => {
    return res.send('Hello');
}

const getUser = async(req, res, next) => {
    return res.send('Hello here');
}

const createUser = async(req, res, next) => {

    const user = req.body;

    const response = await models.userModel.create(user);
    if (response)
        res.status(200).json({ message: "successful", user: response })
    else
        res.status(409).json({ message: "error" })
}

const updateUser = async(req, res, next) => {
    return res.send('Hello');
}

const deleteUser = async(req, res, next) => {
    return res.send('Hello');
}



module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}