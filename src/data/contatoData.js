const conn = require('../infra/database')
const crypto = require('crypto')

exports.getCategoria = async () => {

    const result = await conn.categoria.findMany({
        select: {
            id_categoria: true,
            nome: true
        }
    })

    return result
}


exports.alterarContato = async (data, idContato) => {

    const result = await conn.contatos.updateMany({
        where: {
            id_contatos: idContato
        },
        data: {
            nome: data.nome,
            email: data.email,
            url_github: data.url_github,
            url_linkedin: data.url_linkedin,
            telefone: data.telefone,
            id_categoria: data.categoria
        }
    })

    return result

}

exports.deleteContato = async (data) => {

  const deleteControle =  await conn.controle.deleteMany({
      where: {
        id_contatos: data.idcontato
      }  
    })

   const deleteContatos = await conn.contatos.deleteMany({
        where: {
            id_contatos: data.idcontato
        }
    })

    if(deleteContatos.count >= 1 && deleteControle.count >= 1){
        return { count: 1 }
    }

    return {count: 0}
}

exports.cadastrarContato = async (data, idUser) => {

    const uuid = crypto.randomUUID()

    const insertContatos = await conn.contatos.createMany({
        data: {
            id_contatos: uuid,
            nome: data.nome,
            url_github: data.url_github,
            url_linkedin: data.url_linkedin,
            telefone: data.telefone,
            id_categoria: data.categoria
        }
    })

    const insertControle = await conn.controle.createMany({
        data: {
            id_usuario: idUser,
            id_contatos: uuid
        }
    })

    if(insertContatos.count >= 1 && insertControle >= 1){
        return { count: 1 }
    }

    return { count: 0 }

}