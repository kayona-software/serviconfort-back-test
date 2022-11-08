//Methods to controlle the user model
const CustomerService = require('../services/customerService');
const logger = require('../utils/logger');

const getAllCustomers = (req, res) => {
    logger.info(`[GET] Clientes desde ${req.connection.remoteAddress}`)
    CustomerService.getAllCustomers()
        .then(Customers=>{
            res.send(Customers);   
            logger.info('Devolviendo lista de clientes');   
        })
        .catch(err=>logger.error(err))    
};

const getOneCustomer = (req, res) => {
    CustomerService.getOneCustomer(req.params.CustomerId)
        .then(Customer=>{
            res.send(Customer);
            logger.info(`Devolviendo info del Cliente con id: ${req.params.CustomerId} `)
        })
        .catch(err=>logger.error(err))
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
    CustomerService.deleteCustomer(req.params.CustomerId)
        .then(()=>{
            res.send([`Cliente con id: ${req.params.CustomerId} eliminado`]); //Verificar que se hace con el res
            logger.info(`Cliente con id: ${req.params.CustomerId} eliminado`);
        })
        .catch(err=>logger.error(err))
};

module.exports = {  getAllCustomers, getOneCustomer, createCustomer, updateCustomer, deleteCustomer };  //Export the methods to be used in the controller