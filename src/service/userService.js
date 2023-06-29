const userData = require('../data/userData');
const AppError = require('../utils/AppError');
const ValidData = require('../utils/ValidData');

exports.userService = async (data) => {

    if (ValidData(data.email)) return new AppError('Email is required')
    if (ValidData(data.senha)) return new AppError('Senha is required') 

    const result = await userData.getUser(data)

    return result
}

exports.contatos = async (data) => {
    const result = await userData.contatosData(data)

    return result
}

exports.enviarEmail = (data, res) => {

    if (ValidData(data.nome)) throw new AppError('nome is required')
    if (ValidData(data.email)) throw new AppError('email is required')
    if (ValidData(data.assunto)) throw new AppError('assunto is required')
    if (ValidData(data.mensagem)) throw new AppError('mensagem is required')
    userData.envioEmail(data, res)
}

exports.cadastrarUser = async (data) => {

    if (ValidData(data.nome)) throw new AppError('nome is required')
    if (ValidData(data.email)) throw new AppError('email is required')
    if (ValidData(data.senha)) throw new AppError('password is required')

    const userExists = await userData.userFound(data.email)

    if (userExists !== null) {
        throw new AppError('email found')
    }

    const result = await userData.cadastrarUser(data)

    return result
}

exports.preData = async () => {
    const result = await userData.insertTables()

    return result
}