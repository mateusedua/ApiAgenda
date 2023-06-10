const userData = require('../data/userData')
const AppError = require('../utils/AppError')

const validData = (data) => {
    return data === undefined || data === null || data === ''
}

exports.userService = async (data) => {

    if (validData(data.email)) return new AppError('Email is required')
    if (validData(data.senha)) return new AppError('Senha is required') 

    const result = await userData.getUser(data)

    return result
}