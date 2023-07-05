require('dotenv').config()
const express = require('express');
const AppError = require('./src/utils/AppError')
const { Contatos, Categoria, Usuario, Controle } = require('./src/sequelize/migrations')
const cors = require('cors')

const app = express();

const PORT = 5555

app.use(cors());


(async () => {
    const database = require('./src/infra/database')
    try {
        await database.sync()
    } catch (err) {
        console.log(err)
    }

})();


app.use(express.json());
app.use('/api', require('./src/router/user.router'));
app.use('/api', require('./src/router/contato.router'));

app.use((error, req, res) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            statusCode: "error",
            message: error.message
        })
    }

    return res.status(500).json({
        statusCode: "error",
        message: "Internal Server Error"
    })
})


app.listen(PORT, () => { `Server Start on port ${PORT}` });