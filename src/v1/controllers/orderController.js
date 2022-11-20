//Methods to controlle the user model
const OrderService = require('../services/orderService');
const logger = require('../utils/logger');

const getAllOrders = (req, res) => {
    /*
    logger.info(`[GET] Clientes desde ${req.connection.remoteAddress}`)
    OrderService.getAllOrders()
        .then(Customers=>{
            res.send(Customers);   
            logger.info('Devolviendo lista de clientes');   
        })
        .catch(err=>{
            res.status(500).send('Not Found');
            logger.error(err);
        })  */     
};

const getOrderQuotas = (req, res) => {
    OrderService.getOrderQuotas(req.params.orderId)
        .then(Quotas=>{
            res.send(Quotas[0]);
            logger.info(`Devolviendo Cuotas de la orden: ${req.params.orderId} `)
        })
        .catch(err=>{
            res.status(500).send('Not Found');
            logger.error(err);
        }) 
};



module.exports = { getAllOrders, getOrderQuotas };  //Export the methods to be used in the controller