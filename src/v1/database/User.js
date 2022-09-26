const mysqlConnection = require("./connection.js");

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "select * from user_view",
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


module.exports = { getAllUsers };