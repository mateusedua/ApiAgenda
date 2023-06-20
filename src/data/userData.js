const conn = require('../infra/database');


exports.getUser = async (data) => {


    const result = await pool.query(`
        select 	id_usuario,
		        nome 
        from usuario 
        where email = ?
        and senha = ?

    `, [data.email, data.senha])

    return result[0]
}

exports.contatosData = async (data) => {

    const result = await conn.vw_contatos.findMany({
        where: {
            id_usuario: data.idUsuario
        }
    })

    return result

}