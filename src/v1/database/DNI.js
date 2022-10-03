const logger = require("../utils/logger.js");
const mysqlConnection = require("./connection.js");

const getAllDNIs = () => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "select * from DNI_view",
            (err, rows) => {
                if (!err) {
                    resolve(rows);
                    logger.info('Petición aceptada');
                } else {
                    reject(err);
                    logger.error(err);
                }
                mysqlConnection.destroy;
                logger.info('Conexión a BD cerrada');
            }
        );

    });
};


module.exports = { getAllDNIs };