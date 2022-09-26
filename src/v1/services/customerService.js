//Business Logic for Model User
const customers = require('../database/Customers');

const getAllCustomers = () => {
    return customers.getAllCustomers();
};
  
const getOneCustomer = () => {
    return;
};
  
const createCustomer = () => {
    return;
};
  
const updateCustomer = () => {
    return;
};
  
const deleteCustomer = () => {
    return;
};
  
module.exports = {
    getAllCustomers,
    getOneCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
};