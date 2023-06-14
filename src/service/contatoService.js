const contatoData = require('../data/contatoData');
const ValidData = require('../utils/ValidData');
const AppError = require('../utils/AppError');

exports.categoria = async () => {
    const result = await contatoData.getCategoria()
    return result
}

exports.alterarContato = async (data, idContato) => {

    await contatoData.alterarContato(data, idContato)
}

exports.deleteContato = async (data) => {
    await contatoData.deleteContato(data)
}

const formatPhone = (data) => {
    return data.replace(/[()\s-]/g, '')
}

exports.cadastrarContato = async (data, idUser) => {

    data.telefone = formatPhone(data.telefone)

    await contatoData.cadastrarContato(data, idUser)
}