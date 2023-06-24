const conn = require('../infra/database');
const configEmail = require('../infra/config');
const crypto = require('crypto')


exports.getUser = async (data) => {


    const result = await conn.usuario.findMany({
        where : {
            email: data.email,
            senha: data.senha
        },
        select : {
            id_usuario: true,
            nome: true
        }
    })

    return result
}

exports.userFound = async (data) => {
    const result = await conn.usuario.findFirst({
        where: {
            email: data
        }
    })

    if (result === null) {
        return 0
    }

    return 1
}

exports.contatosData = async (data) => {

    const result = await conn.vw_contatos.findMany({
        where: {
            id_usuario: data.idUsuario
        }
    })

    return result

}


exports.envioEmail = (data, res) => {

    const mailOptions = {
        from: process.env.user,
        to: process.env.user,
        cc: data.email,
        subject: data.assunto,
        html: `<p>${data.mensagem}</p>`
    };

    configEmail.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.status(400).json({})
        } else {
            res.status(200).json({})
        }
    })

    configEmail.close()
}

exports.cadastrarUser = async (data) => {

    const uuid = crypto.randomUUID()

    const result = await conn.usuario.createMany({
        data: {
            id_usuario: uuid,
            nome: data.nome,
            email: data.email,
            senha: data.senha
        }
    })

    return result
}