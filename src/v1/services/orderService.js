//Business Logic for Model User
const order = require('../database/Order');

const getAllOrders = () => {
    return order.getAllOrders();
};

const getOrderQuotas = (orderId) => {
    return order.getOrderQuotas(orderId);
};
  
  
module.exports = {
    getAllOrders,
    getOrderQuotas
};