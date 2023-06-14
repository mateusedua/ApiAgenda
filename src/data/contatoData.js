const pool = require('../infra/database')
const crypto = require('crypto')

exports.getCategoria = async () => {
    const result = await pool.query(`
    select idcategoria,
            nome 
    from categoria
    `)

    return result[0]
}


exports.alterarContato = async (data, idContato) => {
    await pool.query(`
        update contatos
        set nome = ?,
        email = ?,
        url_github = ?,
        url_linkedin = ?,
        telefone = ?,
        categoria_idcategoria = ?
        where idcontatos = ?
    `, [
        data.nome,
        data.email,
        data.url_github,
        data.url_linkedin,
        data.telefone,
        data.categoria,
        idContato
    ])
}

exports.deleteContato = async (data) => {
    await pool.query(`
        delete from controle_contato_usuario
        where contatos_idcontatos = ?
    `, [data.idcontato])

    await pool.query(`
        delete from contatos
        where idcontatos = ?
    `, [data.idcontato])
}

exports.cadastrarContato = async (data, idUser) => {

    const uuid = crypto.randomUUID()

    await pool.query(`
        insert into contatos(
            idcontatos,
            nome,
            email,
            url_github,
            url_linkedin,
            telefone,
            categoria_idcategoria
        )
        values(
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?
        )
    `, [uuid,
        data.nome,
        data.email,
        data.url_github,
        data.url_linkedin,
        data.telefone,
        data.categoria])

    await pool.query(`
        insert into controle_contato_usuario(
            usuario_id_usuario,
            contatos_idcontatos
        )
        values(
            ?,
            ?
        )
    `, [idUser, uuid])
}