const conn = require('../infra/database')

exports.getCategoria = async () => {
    const result = await conn.query(`
    select idcategoria,
            nome 
    from categoria
    `)

    return result[0]
}

exports.getContatos = async (data) => {
    const result = await conn.query(`
        select c.nome,
        c.email,
        c.telefone,
        c.url_github,
        c.url_linkedin,
        ca.idcategoria,
        ca.nome,
        cc.contatos_idcontatos
        from controle_contato_usuario cc
        inner join contatos c on cc.contatos_idcontatos = c.idcontatos
        inner join categoria ca on ca.idcategoria = c.categoria_idcategoria
        inner join usuario u on cc.usuario_id_usuario = u.id_usuario
        where cc.usuario_id_usuario = ?
    `, [data])

    return result[0]
}