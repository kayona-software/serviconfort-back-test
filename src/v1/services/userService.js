//Business Logic for Model User
const users = require('../database/User');

const getAllUsers = () => {
    return users.getAllUsers();
};
  
const getOneUser = () => {
    return;
};
  
const createUser = () => {
    return;
};
  
const updateUser = () => {
    return;
};
  
const deleteUser = () => {
    return;
};
  
module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
};