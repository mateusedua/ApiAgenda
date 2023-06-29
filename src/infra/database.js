const { Sequelize } = require('sequelize')

const conn = new Sequelize('mydb', 'root', 'root', {
    host: '172.17.0.3',
    dialect: 'mysql'
})

module.exports = conn
