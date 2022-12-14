const logger = require("../utils/logger.js");
const mysqlConnection = require("./connection.js");

const getAllCustomers = () => {
    return new Promise((resolve, reject) => {
    const my=mysqlConnection();   
        my.query(
            "select * from customers_view",
            (err, rows) => {
                if (!err) {
                    resolve(rows);
                    logger.info('Se ejecuta query');
                } else {
                    reject(err);
                    logger.error(err);
                }
                my.destroy;
                logger.info('Conexión a BD cerrada');
            }
        );
    });
};

const getResumeCustomers = () => {
    return new Promise((resolve, reject) => {
        const my=mysqlConnection();   
        my.query(
            "select * from customers_select",
            (err, rows) => {
                if (!err) {
                    resolve(rows);
                    logger.info('Se ejecuta query');
                } else {
                    reject(err);
                    logger.error(err);
                }
                my.destroy;
                logger.info('Conexión a BD cerrada');
            }
        );
    });
};

//Obtener un solo cliente con sus datos
const getOneCustomer = (CustomerId) => {
    return new Promise((resolve, reject) => {
        const my=mysqlConnection();  
        my.query(
            `call sp_view_customer(${CustomerId})`,
            (err, rows) => {
                if (!err) {
                    resolve(rows);
                    logger.info('Se ejecuta query');
                } else {
                    reject(err);
                    logger.error(err);
                }
                my.destroy;
                logger.info('Conexión a BD cerrada');
            }
        );
    });
};

//Obtener ordenes abiertas de un cliente
const getOpenOrders = (CustomerId) => {
    return new Promise((resolve, reject) => {
        const my=mysqlConnection();  
        my.query(
            `call sp_view_customer_op_orders(${CustomerId})`,
            (err, rows) => {
                if (!err) {
                    resolve(rows);
                    logger.info('Se ejecuta query');
                } else {
                    reject(err);
                    logger.error(err);
                }
                my.destroy;
                logger.info('Conexión a BD cerrada');
            }
        );
    });
};

const deleteCustomer = (CustomerId) => {
    return new Promise((resolve, reject) => {
        const my=mysqlConnection();  
        my.query(
            `call sp_delete_customer(${CustomerId})`,
            (err, rows) => {
                if (!err) {
                    resolve(rows);
                    logger.info('Se ejecuta query');
                } else {
                    reject(err);
                    logger.error(err);
                }
                my.destroy;
                logger.info('Conexión a BD cerrada');
            }
        );
    });
};

module.exports = { getAllCustomers, getResumeCustomers, deleteCustomer, getOneCustomer, getOpenOrders };