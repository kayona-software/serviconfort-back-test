const mysqlConnection = require("./connection.js");

const getAllCustomers = () => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "select * from customers_view",
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


module.exports = { getAllCustomers };