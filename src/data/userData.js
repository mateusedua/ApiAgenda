const conn = require('../infra/database');
const configEmail = require('../infra/config');
const { Usuario, Controle, Categoria, Contatos } = require('../sequelize/migrations')
const crypto = require('crypto')
const Data = require('./data')

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

    console.log(data)

    const result = await Controle.findAll({
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
            id_usuario: data.id_usuario
        },
    })


    return result

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

exports.insertTables = async () => {
    const categoriaTable = await Categoria.bulkCreate(Data.data.categoria)
    const usuarioTable = await Usuario.bulkCreate(Data.data.usuario)
    const contatosTable = await Contatos.bulkCreate(Data.data.contatos)
    const controleTable = await Controle.bulkCreate(Data.data.controle)

    let result = {
        categoria: false,
        usuario: false,
        contatos: false,
        controle: false
    }

    if (categoriaTable !== null) {
        result.categoria = true
    }

    if (usuarioTable !== null) {
        result.usuario = true
    }

    if (contatosTable !== null) {
        result.contatos = true
    }

    if (controleTable !== null) {
        result.controle = true
    }

    return result
}

exports.alterarUser = async (data) => {
    const result = await Usuario.update({
        nome: data.nome,
        email: data.email,
        senha: data.senha
    }, {
        where: {
            id_usuario: data.idUser
        }
    })

    return result
}

exports.deleteUser = async (data) => {
    const result = await Usuario.destroy({
        where: {
            id_usuario: data
        }
    })

    return result
}

exports.dataUser = async (data) => {
    const result = await Usuario.findOne({
        attributes: ['nome', 'email'],
        where: {
            id_usuario: data.idUser
        }
    })

    return result
}
