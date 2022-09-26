//Methods to controlle the user model
const CustomerService = require('../services/customerService');

//If not recieved any condition in the request, then it will return all the Customers
const getAllCustomers = (req, res) => {
    CustomerService.getAllCustomers()
        .then(Customers=>{
            res.send(Customers);   
    });    
};

const getOneCustomer = (req, res) => {
    const Customer =CustomerService.deleteCustomer();
    res.send(`Get Customer with id: ${req.params.CustomerId}`);
};

const createCustomer = (req, res) => {
    const createdCustomer =CustomerService.createCustomer();
    res.send("Create New Customer");
};

const updateCustomer = (req, res) => {
    const updatedCustomer =CustomerService.updateCustomer();
    res.send(`Update Customer with id: ${req.params.CustomerId}`);
};

const deleteCustomer = (req, res) => {
    const deletedCustomer =  CustomerService.deleteCustomer();
    res.send(`Delete Customer with id: ${req.params.CustomerId}`);
};

module.exports = {  getAllCustomers, getOneCustomer, createCustomer, updateCustomer, deleteCustomer };  //Export the methods to be used in the controller