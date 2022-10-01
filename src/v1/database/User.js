const logger = require("../utils/logger.js");
const mysqlConnection = require("./connection.js");

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "select * from user_view",
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


module.exports = { getAllUsers };