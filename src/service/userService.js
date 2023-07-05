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

exports.alterarUser = async (data) => {

    if (ValidData(data.nome)) throw new AppError('nome is required')
    if (ValidData(data.email)) throw new AppError('email is required')
    if (ValidData(data.senha)) throw new AppError('senha is required')

    const result = await userData.alterarUser(data)

    return result
}

exports.deleteUser = async (data) => {
    if (ValidData(data.idUser)) throw new AppError('Id is required')

    const result = await userData.deleteUser(data)

    return result
}

exports.dataUser = async (data) => {
    if (ValidData(data.idUser)) throw new AppError('Id is required')

    const result = await userData.dataUser(data)

    return result
}