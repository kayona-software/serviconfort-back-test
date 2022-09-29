const mysqlConnection = require("./connection.js");

const getAllCities = () => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "select * from city_view",
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


module.exports = { getAllCities };