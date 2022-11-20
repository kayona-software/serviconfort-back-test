const logger = require("../utils/logger.js");
const mysqlConnection = require("./connection.js");

const getAllProducts = () => {
    return new Promise((resolve, reject) => {
        const my=mysqlConnection();
        my.query(
            "select * from products_view",
            (err, rows) => {
                if (!err) {
                    resolve(rows);
                    logger.info('Petición aceptada');
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

const deleteProduct = (ProductId) => {
    return new Promise((resolve, reject) => {
        const my=mysqlConnection();
        my.query(
            `call sp_delete_product(${ProductId})`,
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

module.exports = { getAllProducts,deleteProduct };