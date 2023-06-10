const conn = require('../infra/database')

exports.getCategoria = async () => {
    const result = await conn.query(`
    select idcategoria,
            nome 
    from categoria
    `)

    return result[0]
}