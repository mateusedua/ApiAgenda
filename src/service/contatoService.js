const contatoData = require('../data/contatoData');
const ValidData = require('../utils/ValidData');
const AppError = require('../utils/AppError');

exports.categoria = async () => {
    const result = await contatoData.getCategoria()
    return result
}

exports.alterarContato = async (data, idContato) => {

    const result = await contatoData.alterarContato(data, idContato)
    return result
}

exports.deleteContato = async (data) => {
    const result = await contatoData.deleteContato(data)
    return result
}

const formatPhone = (data) => {
    return data.replace(/[()\s-]/g, '')
}

exports.cadastrarContato = async (data, idUser) => {

    data.telefone = formatPhone(data.telefone)

    await contatoData.cadastrarContato(data, idUser)
}