const mysql = require('mysql2');
require('dotenv').config();
const logger = require('../utils/logger')


const mysqlConnection = ()=>{
    try{
        return(
            mysql.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                multipleStatements:true
            }))
    }catch(err){
        console.error('Error de conexión');
    }
};


module.exports=mysqlConnection;
