const logger = require("../utils/logger.js");
const mysqlConnection = require("./connection.js");

const getAllOrders = () => {/*
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
    });*/
};


//Obtener un solo cliente con sus datos
const getOrderQuotas = (OrderId) => {
    return new Promise((resolve, reject) => {
        const my=mysqlConnection();  
        my.query(
            `call sp_view_quota_orders(${OrderId})`,
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


module.exports = { getAllOrders, getOrderQuotas};