//Business Logic for Model User
const customers = require('../database/Customers');

const getAllCustomers = () => {
    return customers.getAllCustomers();
};
  
const getOneCustomer = (CustomerId) => {
    return customers.getOneCustomer(CustomerId);
};
  
const createCustomer = () => {
    return;
};
  
const updateCustomer = () => {
    return;
};
  
const deleteCustomer = (CustomerId) => {
    return customers.deleteCustomer(CustomerId);
};
  
module.exports = {
    getAllCustomers,
    getOneCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
};