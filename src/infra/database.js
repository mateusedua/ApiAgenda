const mysql2 = require('mysql2')


const conn = mysql2.createConnection({
    host: '172.17.0.4',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'mydb',
}).promise();


module.exports = conn;