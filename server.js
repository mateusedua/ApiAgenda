const express = require('express');
const AppError = require('./src/utils/AppError')

const app = express();

const PORT = 3000

app.use(express.json());

app.use('/api', require('./src/router/user.router'));

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