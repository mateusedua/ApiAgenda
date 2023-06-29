const conn = require('../infra/database');
const configEmail = require('../infra/config');
const Sequelize = require('sequelize')
const { Usuario, Controle, Categoria, Contatos } = require('../sequelize/migrations')
const crypto = require('crypto')


exports.getUser = async (data) => {

    const result = await Usuario.findOne({
        attributes: ['id_usuario', 'nome'],
        where: {
            email: data.email,
            senha: data.senha
        }
    })

    return result
}

exports.userFound = async (data) => {

    const result = await Usuario.findOne({
        where: {
            email: data
        }
    })

    return result
}

exports.contatosData = async (data) => {

    const result = Controle.findAll({
        attributes: [
            'id_contatos',
            'id_usuario'
        ],
        include: [
            {
                model: Contatos,
                as: 'contato',
                attributes: [
                    'nome',
                    'email',
                    'telefone',
                    'url_github',
                    'url_linkedin'
                ],
                include: {
                    model: Categoria,
                    as: 'categorium',
                    attributes: [
                        'id_categoria',
                        'nome'
                    ]
                }
            }
        ],
        where: {
            id_usuario: data.idUsuario
        },
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

    const result = await Usuario.create({
        id_usuario: uuid,
        nome: data.nome,
        email: data.email,
        senha: data.senha        
    })

    return result
}