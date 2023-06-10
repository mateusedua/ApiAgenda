const conn = require('../infra/database');


exports.getUser = async (data) => {


    const result = await conn.query(`
        select 	id_usuario,
		        nome 
        from usuario 
        where email = ?
        and senha = ?

    `, [data.email, data.senha])

    return result[0]
}