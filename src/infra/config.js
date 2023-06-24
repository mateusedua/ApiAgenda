const email = require('nodemailer');

const remetente = email.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.user,
        pass: process.env.password
    }
})

module.exports = remetente