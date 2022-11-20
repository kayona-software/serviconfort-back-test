//Methods to controlle the user model
const userService = require('../services/userService');
const logger = require('../utils/logger');

//If not recieved any condition in the request, then it will return all the users
const getAllUsers = (req, res) => {
    userService.getAllUsers()
        .then(users=>{
            res.send(users);   
            logger.info('Devolviendo lista de usuarios');   
        })
        .catch(err=>{
            res.status(500).send('Not Found');
            logger.error(err);
        })     
};

const getOneUser = (req, res) => {
    const user =userService.deleteUser();
    res.send(`Get User with id: ${req.params.userId}`);
};

const createUser = (req, res) => {
    const createdUser =userService.createUser();
    res.send("Create New User");
};

const updateUser = (req, res) => {
    const updatedUser =userService.updateUser();
    res.send(`Update User with id: ${req.params.userId}`);
};

const deleteUser = (req, res) => {
    const deletedUser =  userService.deleteUser();
    res.send(`Delete User with id: ${req.params.userId}`);
};

module.exports = {  getAllUsers, getOneUser, createUser, updateUser, deleteUser };  //Export the methods to be used in the controller

