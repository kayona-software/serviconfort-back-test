//Business Logic for Model User
const customers = require('../database/Customers');

const getAllCustomers = () => {
    return customers.getAllCustomers();
};

const getResumeCustomers = () => {
    return customers.getResumeCustomers();
};
  
const getOneCustomer = (CustomerId) => {
    return customers.getOneCustomer(CustomerId);
};

const getOpenOrders = (CustomerId) => {
    return customers.getOpenOrders(CustomerId);
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
    getResumeCustomers,
    getOneCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    getOpenOrders
};