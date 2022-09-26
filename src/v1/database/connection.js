const mysql = require('mysql2');
require('dotenv').config();

const mysqlConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements:true
})


mysqlConnection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }else {
        console.log('DB connected');
    }

})

module.exports=mysqlConnection;