const mysql2 = require('mysql2')


const conn = mysql2.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'mydb',
}).promise();


module.exports = conn;