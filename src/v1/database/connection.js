const mysql = require('mysql2');
require('dotenv').config();
const logger = require('../utils/logger')


const mysqlConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements:true
})


mysqlConnection.connect((err)=>{
    if(err){
        logger.error(err);
        return;
    }else {
        logger.info('DB connected');
    }

})

module.exports=mysqlConnection;