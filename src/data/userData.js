const conn = require('../infra/database');


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

exports.contatosData = async (data) => {

    const result = await conn.vw_contatos.findMany({
        where: {
            id_usuario: data.idUsuario
        }
    })

    return result

}