const contatoData = require('../data/contatoData');
const ValidData = require('../utils/ValidData');
const AppError = require('../utils/AppError');

exports.categoria = async () => {
    const result = await contatoData.getCategoria()
    return result
}

exports.contatos = async (data) => {

    if (ValidData(data.idUsuario)) return new AppError('idUsuario is required');

    const result = await contatoData.getContatos(data.idUsuario)

    return result
}