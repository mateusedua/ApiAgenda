const conn = require('../infra/database')
const crypto = require('crypto')
const { Categoria, Contatos, Controle } = require('../sequelize/migrations')

exports.getCategoria = async () => {

    const result = await Categoria.findAll({
        attributes: ['id_categoria', 'nome']
    })

    return result
}


exports.alterarContato = async (data, idContato) => {

    const result = await Contatos.update({
        nome: data.nome,
        email: data.email,
        url_github: data.url_github,
        url_linkedin: data.url_linkedin,
        telefone: data.telefone,
        categoriumIdCategoria: parseInt(data.categoria)
    },
        {
            where: {
                id_contatos: idContato
            }
        }
    )

    return result

}

exports.deleteContato = async (data) => {

    const deleteControle = await Controle.destroy({
        where: {
            id_contatos: data.idcontato
        }
    })

    const deleteContatos = await Contatos.destroy({
        where: {
            id_contatos: data.idcontato
        }
    })

    if (deleteContatos !== null && deleteControle !== null) {
        return { count: 1 }
    }

    return {count: 0}
}

exports.cadastrarContato = async (data, idUser) => {

    console.log(data, idUser)

    const uuid = crypto.randomUUID()

    const insertContatos = await Contatos.create({
        id_contatos: uuid,
        nome: data.nome,
        email: data.email,
        url_github: data.url_github,
        url_linkedin: data.url_linkedin,
        telefone: data.telefone,
        categoriumIdCategoria: parseInt(data.categoria)        
    })

    const insertControle = await Controle.create({
        id_usuario: idUser,
        id_contatos: uuid
    })

    if (insertContatos !== 1 && insertControle !== null) {
        return { count: 1 }
    }

    return { count: 0 }

}