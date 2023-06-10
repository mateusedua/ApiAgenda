const userData = require('../data/userData');
const AppError = require('../utils/AppError');
const ValidData = require('../utils/ValidData');

exports.userService = async (data) => {

    if (ValidData(data.email)) return new AppError('Email is required')
    if (ValidData(data.senha)) return new AppError('Senha is required') 

    const result = await userData.getUser(data)

    return result
}