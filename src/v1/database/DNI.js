const mysqlConnection = require("./connection.js");

const getAllDNIs = () => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "select * from DNI_view",
            (err, rows) => {
                if (!err) {
                    resolve(rows);
                } else {
                    reject(err);
                }
            }
        );
    });
};


module.exports = { getAllDNIs };