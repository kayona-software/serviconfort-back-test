const logger = require("../utils/logger.js");
const mysqlConnection = require("./connection.js");

const getAllCustomers = () => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "select * from customers_view",
            (err, rows) => {
                if (!err) {
                    resolve(rows);
                    logger.info('Petición aceptada');
                } else {
                    reject(err);
                    logger.err(err);
                }
            }
        );
    });
};


module.exports = { getAllCustomers };